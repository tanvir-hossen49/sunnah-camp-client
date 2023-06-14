import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { data: isAdmin, isLoading: isLoadingAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });

  return [isAdmin, isLoadingAdmin];
};

export default useAdmin;
