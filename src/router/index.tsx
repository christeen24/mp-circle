import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import LoginPage from "@/pages/login";
import DashboardPage from "@/pages/dashboard";
import CoursesPage from "@/pages/courses";
import AssignmentsPage from "@/pages/assignments";
import ProfilePage from "@/pages/profile";
import SettingsPage from "@/pages/settings";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { ROUTES } from "@/constants/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: ROUTES.COURSES.slice(1),
        element: <CoursesPage />,
      },
      {
        path: ROUTES.ASSIGNMENTS.slice(1),
        element: <AssignmentsPage />,
      },
      {
        path: ROUTES.PROFILE.slice(1),
        element: <ProfilePage />,
      },
      {
        path: ROUTES.SETTINGS.slice(1),
        element: <SettingsPage />,
      },
    ],
  },
]);
