import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isLoadingAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);

      if (data.role === "admin") {
        return true;
      } else {
        return false;
      }
    },
  });

  return [isAdmin, isLoadingAdmin];
};

export default useAdmin;
