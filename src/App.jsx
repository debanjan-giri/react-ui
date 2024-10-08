import React from "react";
import MainLayout from "./layout/MainLayout";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </div>
  );
}

export default App;
