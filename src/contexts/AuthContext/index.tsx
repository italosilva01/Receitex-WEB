import React, { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./types";

interface IProps {
  children: React.ReactNode;
}

interface IAuthContext {
  user: IUser;
  decodeJWTAndGetUser: (token: string) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useLocalStorage<IUser>("@receitex/user", {} as IUser);

  const decodeJWTAndGetUser = (token: string) => {
    const decoded = jwtDecode(token) as IUser;
    console.log(decoded)
    setUser(decoded);
  };

  return <AuthContext.Provider value={{ user, decodeJWTAndGetUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
