import { createContext, useState, useEffect, type ReactNode } from "react";
import type { BedroomProps } from "../types/BedroomType";
import { quartos as mockQuartos } from "../mocks/BedroomMock";

export interface BedroomContextType {
  quartos: BedroomProps[];
  isLoading: boolean;
  getQuartoById: (id: string) => BedroomProps | undefined;
}

export const BedroomContext = createContext<BedroomContextType>({
  quartos: [],
  isLoading: true,
  getQuartoById: () => undefined,
});

export const BedroomProvider = ({ children }: { children: ReactNode }) => {
  const [quartos, setQuartos] = useState<BedroomProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setQuartos(mockQuartos);
      setIsLoading(false);
    }, 500);
  }, []);

  const getQuartoById = (id: string) => {
    return quartos.find((_, index) => index.toString() === id);
  };

  return (
    <BedroomContext.Provider value={{ quartos, isLoading, getQuartoById }}>
      {children}
    </BedroomContext.Provider>
  );
};
