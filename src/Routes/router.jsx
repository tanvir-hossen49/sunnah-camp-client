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
import Classes from "../page/Classes/Classes";
import MySelectedCourse from "../page/DashBoardPage/MySelectedCourse";
import Payment from "../page/DashBoardPage/Payment";
import AdminRoute from "./AdminRoutes";

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
        loader: () => fetch("http://localhost:3001/all-instructors"),
      },
      {
        path: "classes",
        element: <Classes />,
        loader: () => fetch("http://localhost:3001/user/all-classes"),
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
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
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
      // user routes
      {
        path: "my-selected-course",
        element: <MySelectedCourse />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
