import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../utility/ThemeToggle";
import useAuth from "../Hook/useAuth";
import useRole from "../Hook/useRole";
import useTitle from "../Hook/useTitle";
import {
  BookMarked,
  BookPlus,
  CircleDollarSign,
  FileEdit,
  Home,
  UserCircle2,
  UserCog2,
  Users2,
} from "lucide-react";
import { Users } from "lucide-react";

const DashboardLayout = () => {
  useTitle("Dashboard");
  const { user } = useAuth();
  const [role] = useRole();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-x-auto custom-scroll-bar">
        <Outlet />
        <div className=" text-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle btn-outline lg:hidden my-10"
          >
            Open
          </label>
        </div>
      </div>
      <div className="drawer-side border-r ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="space-y-10 menu p-4 md:w-80 w-60  md:text-1xl flex flex-col  text-base uppercase">
          <li>
            <div className="avatar block text-center mx-auto ">
              <div className="md:w-32 w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
              <p className="capitalize text-lg font-light mt-2">{role}</p>
            </div>
          </li>

          <div>
            {role === "admin" ? (
              <>
                <li>
                  <NavLink to="/dashboard/manage-classes">
                    <Users className="mr-2" />
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-users">
                    <UserCog2 className="mr-2" />
                    Manage Users
                  </NavLink>
                </li>
              </>
            ) : role === "instructor" ? (
              <>
                <li>
                  <NavLink to="/dashboard/add-a-class">
                    <BookPlus className="mr-2" />
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-classes">
                    <Users2 className="mr-2" />
                    My Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/update-instructor">
                    <FileEdit className="mr-2" />
                    Update Info
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/my-selected-course">
                    <UserCircle2 className="mr-2" />
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-enrolled-class">
                    <BookMarked className="mr-2" />
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/payment-history">
                    <CircleDollarSign className="mr-2" />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
          </div>

          <div className="w-full h-[2px] bg-gray-700 rounded-lg"></div>

          <div>
            <li>
              <Link to="/">
                <Home className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
