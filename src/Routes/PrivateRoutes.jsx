import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="pt-10 text-center">
        <span className=" loading loading-dots loading-lg "></span>;
      </div>
    );

  if (user) return children;

  <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
