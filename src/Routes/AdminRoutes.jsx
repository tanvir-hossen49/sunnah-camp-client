import { Navigate, useLocation } from "react-router";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isLoadingAdmin] = useAdmin();
  const location = useLocation();

  console.log(isAdmin);

  if (loading || isLoadingAdmin) {
    return (
      <div className="pt-10 text-center">
        <span className=" loading loading-dots loading-lg "></span>;
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
