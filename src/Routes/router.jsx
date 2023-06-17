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
import Classes from "../page/Classes/Classes";
import MySelectedCourse from "../page/DashBoardPage/MySelectedCourse";
import Payment from "../page/DashBoardPage/Payment";
import AdminRoute from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import ManageUsers from "../page/DashBoardPage/ManageUsers";
import Error from "../page/Error/Error";
import axios from "axios";
import PaymentHistory from "../page/DashBoardPage/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
    errorElement: <Error />,
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
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      //instructor routes
      {
        path: "add-a-class",
        element: (
          <InstructorRoutes>
            <AddClass />
          </InstructorRoutes>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoutes>
            <MyClasses />
          </InstructorRoutes>
        ),
      },

      // user routes
      {
        path: "my-selected-course",
        element: <MySelectedCourse />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3001/price/${params.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("sunnah-camp")}`,
            },
          }),
      },
      {
        path: "payment/history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
