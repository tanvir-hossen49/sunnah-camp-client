import { Navigate, useLocation } from "react-router";
import useAuth from "../Hook/useAuth";
import useRole from "../Hook/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <div className="pt-10 text-center">
        <span className=" loading loading-dots loading-lg "></span>;
      </div>
    );
  }

  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
