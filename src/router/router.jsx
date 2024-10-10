import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/dashboard/pages/HomePage";
import AnalyticsPage from "../pages/analytics/pages/AnalyticsPage";
import ProtectedRoute from "./ProtectedRoute";
import { authRoutes } from "../pages/auth/router/authRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />,
    errorElement: <div>Page Not Found</div>,
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
  ...authRoutes,
]);

export default router;
