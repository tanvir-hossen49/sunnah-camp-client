import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import axios from "axios";

const Home = lazy(() => import("../page/Home/Home"));
const SignIn = lazy(() => import("../page/SignIn/SignIn"));
const SignUp = lazy(() => import("../page/SignUp/SignUp"));
const Instructors = lazy(() => import("../page/Instructors/Instructors"));
const Classes = lazy(() => import("../page/Classes/Classes"));
const Profile = lazy(() => import("../page/Profile/Profile"));
const AddClass = lazy(() => import("../page/DashBoardPage/AddClass"));
const MyClasses = lazy(() => import("../page/DashBoardPage/MyClasses"));
const ManageClasses = lazy(() => import("../page/DashBoardPage/ManageClasses"));
const ManageUsers = lazy(() => import("../page/DashBoardPage/ManageUsers"));
const MySelectedCourse = lazy(() =>
  import("../page/DashBoardPage/MySelectedCourse")
);
const Payment = lazy(() => import("../page/DashBoardPage/Payment"));
const PaymentHistory = lazy(() =>
  import("../page/DashBoardPage/PaymentHistory")
);
const MyEnrolledClasses = lazy(() =>
  import("../page/DashBoardPage/MyEnrolledClasses")
);
const Error = lazy(() => import("../page/Error/Error"));

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
      },
      {
        path: "profile/:email",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
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
          axios.get(`https://summer-camp-two.vercel.app/price/${params.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("sunnah-camp")}`,
            },
          }),
      },
      {
        path: "payment/history",
        element: <PaymentHistory />,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClasses />,
      },
    ],
  },
]);

export default router;
