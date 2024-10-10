import AuthPage from "../pages/AuthPage";

export const authRoutes = [
  {
    path: "/login",
    element: <AuthPage page="Login" />,
  },
  {
    path: "/register",
    element: <AuthPage page="Register" />,
  }
];
