import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./provider/AuthProvider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="border-4 border-t-4 border-t-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>
);
