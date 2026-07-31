import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import LoginPage from "@/pages/login"
import DashboardPage from "@/pages/dashboard"
import CoursesPage from "@/pages/courses"
import AssignmentsPage from "./pages/assignments"
import ProfilePage from "./pages/profile"
import SettingsPage from "./pages/settings"

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
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "assignments",
        element: <AssignmentsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      }
    ],
  },
])
