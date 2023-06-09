import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ThemeToggle from "./utility/ThemeToggle";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ThemeToggle />
    </React.StrictMode>
  </AuthProvider>
);
