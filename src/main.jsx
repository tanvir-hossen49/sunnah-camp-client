import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import AuthProvider from "./provider/AuthProvider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Spinner from "./components/Spinner";
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <SkeletonTheme baseColor="#313131" highlightColor="#525252">
            <RouterProvider router={router} />
          </SkeletonTheme>
        </Suspense>
      </QueryClientProvider>
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>
);
