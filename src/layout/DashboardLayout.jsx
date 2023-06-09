import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../utility/ThemeToggle";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {Outlet}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side border-r ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/my-selected-class">My Selected Classes</NavLink>
          </li>
          <li>
            <NavLink to="/my-enrolled-class">My Enrolled Classes</NavLink>
          </li>
          <li>
            <NavLink to="/payment-history">Payment History</NavLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
