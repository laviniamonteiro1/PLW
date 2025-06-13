import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { App } from "../App";
import React from "react";

vi.mock("../styles/GlobalStyles", () => ({
  GlobalStyle: () => <div data-testid="global-style">Global Styles Mock</div>,
}));

vi.mock("../contexts/AuthContext", () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="auth-provider">{children}</div>,
}));

vi.mock("../contexts/BedroomContext", () => ({
  BedroomProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="bedroom-provider">{children}</div>,
}));

vi.mock("../routes", () => ({
  RouteWeb: () => <div data-testid="route-web">RouteWeb Mock</div>,
}));

describe("App", () => {
  it("deve renderizar todos os componentes principais e provedores corretamente aninhados", () => {
    render(<App />);

    expect(screen.getByTestId("global-style")).toBeInTheDocument();

    const authProvider = screen.getByTestId("auth-provider");
    expect(authProvider).toBeInTheDocument();

    const bedroomProvider = screen.getByTestId("bedroom-provider");
    expect(bedroomProvider).toBeInTheDocument();

    const routeWeb = screen.getByTestId("route-web");
    expect(routeWeb).toBeInTheDocument();

    expect(bedroomProvider).toContainElement(routeWeb);
    expect(authProvider).toContainElement(bedroomProvider);
  });
});