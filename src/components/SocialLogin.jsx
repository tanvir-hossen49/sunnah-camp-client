import { Github } from "lucide-react";
import ShowToast from "../utility/ShowToast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../Hook/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleLogin().then(async result => {
      const { displayName: name, email } = result.user;

      try {
        const savedUser = { name, email };
        const response = await axios.post(
          "http://localhost:3001/users",
          savedUser
        );
        const data = response.data;
        if (data.insertedId) {
          ShowToast("success", "user profile updated");
          navigate(from, { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <div className="mt-3 space-y-3">
      {/* GOOGLE LOGIN BUTTON */}
      <button
        type="button"
        onClick={handleGoogleLogIn}
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400  px-3.5 py-2.5 font-semibold  transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
      >
        <span className="mr-2 inline-block">
          <svg
            className="h-6 w-6 text-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
          </svg>
        </span>
        Sign in with Google
      </button>
      {/* TODO */}
      {/* GITHUB LOGIN BUTTON */}
      <button
        type="button"
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400  px-3.5 py-2.5 font-semibold  transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
      >
        <span className="mr-2 inline-block">
          <Github />
        </span>
        Sign in with Github
      </button>
    </div>
  );
};

export default SocialLogin;
