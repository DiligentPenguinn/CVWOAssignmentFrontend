import { createContext } from "react";

export const jwtContext = createContext<String>("");

export interface MyContextProps {
  jwtToken: String;
  alertClassName: String;
  alertMessage: String;
  setJwtToken: React.Dispatch<React.SetStateAction<String>>;
  toggleRefresh: (status: Boolean) => void;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);
