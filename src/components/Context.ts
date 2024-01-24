import { createContext } from "react";

export const jwtContext = createContext<String>("");

export const toggleLoginContext = createContext<Boolean>(true);