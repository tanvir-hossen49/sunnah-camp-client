import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import AddClass from "../page/DashBoardPage/AddClass";
import MyClasses from "../page/DashBoardPage/MyClasses";
import ManageClasses from "../page/DashBoardPage/ManageClasses";
import Instructors from "../page/Instructors/Instructors";
import AddInstructor from "../page/DashBoardPage/AddInstructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "instructors",
        element: <Instructors />,
        loader: () => fetch("http://localhost:3001/instructors"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      // admin routes
      {
        path: "manage-classes",
        element: <ManageClasses />,
      },
      //instructor routes
      {
        path: "add-a-class",
        element: <AddClass />,
      },
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        path: "add-instructor",
        element: <AddInstructor />,
      },
    ],
  },
]);

export default router;
