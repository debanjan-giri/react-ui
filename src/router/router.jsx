import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/dashboard/pages/HomePage";
import AnalyticsPage from "../pages/analytics/pages/AnalyticsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
]);

export default router;
