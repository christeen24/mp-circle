import { createContext } from "react";
import type { LoginResponse } from "@/interfaces/user";

export interface AuthContextType {
  user: LoginResponse["user"] | null;
  token: string | null;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
