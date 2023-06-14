import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../utility/ThemeToggle";
import { useEffect, useState } from "react";

import useAuth from "../Hook/useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [role, setRole] = useState("");
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    (async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      setRole(data.role);
    })();
  }, [user?.email, axiosSecure]);

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
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-enrolled-class">Manage Users</NavLink>
                </li>
              </>
            ) : role === "instructor" ? (
              <>
                <li>
                  <NavLink to="/dashboard/add-a-class">Add a Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-classes">My Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-instructor">Update Info</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/my-selected-course">
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-enrolled-class">My Enrolled Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/payment-history">Payment History</NavLink>
                </li>
              </>
            )}
          </div>

          <div className="w-full h-[2px] bg-gray-700 rounded-lg"></div>

          <div>
            <li>
              <Link to="/">Home</Link>
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
