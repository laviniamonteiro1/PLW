"use client";

import { Container } from "./styles";
import { NavbarSemAvatar } from "/app/src/components/NavbarWithoutAvatar";
import { Footer } from "/app/src/components/Footer";
import { LoginForm } from "/app/src/components/LoginForm";

export default function Login() {
  return (
    <>
      <NavbarSemAvatar />
      <Container>
        <LoginForm />
      </Container>
      <Footer />
    </>
  );
}
