import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import ThemeToggle from "../../utility/ThemeToggle";

const NavigationBar = () => {
  const { user } = useAuth();

  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/order/salads">ORDER FOOD</Link>
      </li>

      {user ? (
        <>
          <li>
            <button
              type="button"
              className="rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign out
            </button>
          </li>

          <img
            className="w-12 h-12 rounded-full ml-3"
            src={user.photoURL}
            alt=""
            title={user.displayName}
          />
        </>
      ) : (
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      )}

      <li>
        <ThemeToggle />
      </li>
    </>
  );

  return (
    <nav className="navbar px-8 border-b justify-between backdrop-blur-sm ">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu uppercase menu-compact dropdown-content  mt-3 p-2 shadow  rounded-box w-52  font-extrabold nav-item border"
          >
            {navOptions}
          </ul>
        </div>
        <a className="leading-5 text-xl">
          <span className="font-bold">Summer Camp</span>
        </a>
      </div>

      <div className="hidden lg:flex ">
        <ul className="menu uppercase menu-horizontal px-1 flex justify-center items-center  font-extrabold">
          {navOptions}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
