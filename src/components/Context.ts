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
    throw new Error("Something");
  }
  return context;
}