import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.JSX.Element }) {
  const auth = localStorage.getItem("auth");

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
