import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import ThemeToggle from "./utility/ThemeToggle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h2>golam aziz tanvir</h2>
    <MainLayout></MainLayout>
    <ThemeToggle />
  </React.StrictMode>
);
