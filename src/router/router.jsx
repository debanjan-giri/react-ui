import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/dashboard/pages/HomePage";
import AnalyticsPage from "../pages/analytics/pages/AnalyticsPage";
import ProtectedRoute from "./ProtectedRoute";
import AuthPage from "../pages/auth/pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "*",
        element: <div>Page Not Found</div>,
      },
    ],
  },

  {
    path: "/login",
    element: <AuthPage page="Login" />,
  },
  {
    path: "/register",
    element: <AuthPage page="Register" />,
  },
]);

export default router;
