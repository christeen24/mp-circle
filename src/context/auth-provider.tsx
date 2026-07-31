import { useState } from "react";
import type { LoginResponse } from "@/interfaces/user";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<LoginResponse | null>(() => {
    const auth = localStorage.getItem("auth");
    return auth ? (JSON.parse(auth) as LoginResponse) : null;
  });

  function login(data: LoginResponse) {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuthState(data);
  }

  function logout() {
    localStorage.removeItem("auth");
    setAuthState(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user: authState?.user ?? null,
        token: authState?.token ?? null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
