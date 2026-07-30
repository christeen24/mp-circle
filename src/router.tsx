import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import LoginPage from "@/pages/login"
import DashboardPage from "@/pages/dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
])
