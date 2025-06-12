import { useContext } from "react";
import { BedroomContext } from "/app/src/contexts/BedroomContext";

export const useBedroom = () => useContext(BedroomContext);
