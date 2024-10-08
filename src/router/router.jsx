import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/dashboard/pages/HomePage";
import AnalyticsPage from "../pages/analytics/pages/AnalyticsPage";
import ProtectedRoute from "./ProtectedRoute";
import RegisterPage from "../pages/auth/pages/RegisterPage";

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
        auth: true,
      },
      {
        path: "*",
        element: <div>Page Not Found</div>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
