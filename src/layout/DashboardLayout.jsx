import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../utility/ThemeToggle";

const DashboardLayout = () => {
  const isAdmin = false;
  const isInstructor = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-circle btn-outline lg:hidden my-10"
        >
          Open
        </label>
      </div>
      <div className="drawer-side border-r ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 md:w-80 w-60 h-full md:text-2xl text-base uppercase">
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
                <NavLink to="/my-enrolled-class">My Classes</NavLink>
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
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
