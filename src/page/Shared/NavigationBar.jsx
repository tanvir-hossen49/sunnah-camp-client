import { NavLink } from "react-router-dom";
import ThemeToggle from "../../utility/ThemeToggle";
import ShowToast from "../../utility/ShowToast";
import { Menu } from "lucide-react";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";

const NavigationBar = () => {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then(result => {
      if (result.isConfirmed) {
        logout().then(() => {
          ShowToast("success", "logout successfull");
        });
      }
    });
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/dashboard">dashboard</NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={handleLogOut}
              className="rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign out
            </button>
          </li>

          <li>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} title={user.displayName} />
              </div>
            </div>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/signin">LOGIN</NavLink>
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
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="menu  uppercase menu-compact dropdown-content  mt-3 p-2 shadow  rounded-box w-52  font-extrabold nav-item border"
          >
            {navOptions}
          </ul>
        </div>
        <a className="leading-5 text-xl">
          <span className="font-bold">Sunnah Camp</span>
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
