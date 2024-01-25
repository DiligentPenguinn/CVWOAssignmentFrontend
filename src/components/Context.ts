import { createContext, useContext } from "react";

type jwtContext = {
  jwtToken : string
  setJwtToken: React.Dispatch<React.SetStateAction<string>>
  toggleRefresh: (status : boolean) => void
}

export const jwtContext = createContext<jwtContext | null>(null);

export const useJwtContext = () => {
  const context = useContext(jwtContext);
  if (context === null) {
    throw new Error("You need to set value for jwtContext!");
  }
  return context;
}

type LoginFormContext = {
  status : string
  setStatus: React.Dispatch<React.SetStateAction<string>>
  handleClose: () => void
}

export const LoginFormContext = createContext<LoginFormContext | null>(null);

export const useLoginFormContext = () => {
  const context = useContext(LoginFormContext);
  if (context === null) {
    throw new Error("You need to set value for LoginFormContext!");
  }
  return context;
}