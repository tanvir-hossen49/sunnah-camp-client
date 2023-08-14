import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";
import crying from "../../assets/giphy.gif";

const Error = () => {
  useTitle("404 Error");


  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-full h-screen flex justify-center flex-col items-center">
      <div className="text-8xl  font-bold flex items-center">
        4
        <span>
          <img className="w-48 h-48 " src={crying}></img>
        </span>
        4
      </div>
      <p className="text-2xl font-semibold uppercase">
        Oops! page not be found
      </p>
      <Link to="/">
        <button className="btn btn-primary mt-5">back to home</button>
      </Link>
    </div>
  );
};

export default Error;
