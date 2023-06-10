import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../utility/ThemeToggle";
import useAuth from "../page/Hook/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const isAdmin = false;
  const isInstructor = true;

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
        <ul className="space-y-10 menu p-4 md:w-80 w-60 h-full md:text-1xl flex flex-col  text-base uppercase">
          <li>
            <div className="avatar block text-center mx-auto ">
              <div className="md:w-32 w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
              <p className="capitalize text-lg font-light mt-2">Instructor</p>
            </div>
          </li>

          <div>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/my-selected-class">Manage Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/my-enrolled-class">Manage Users</NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/add-a-class">Add a Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-classes">My Classes</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/my-selected-class">My Selected Classes</NavLink>
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
