import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";

const Users = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-users");
      return data;
    },
  });

  return [users, refetch];
};

const ManageUsers = () => {
  const [users, refetch] = Users();
  const [axiosSecure] = useAxiosSecure();

  const handleInstructor = email => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to make it an instructor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(
          `/user/${email}?role=instructor`
        );
        refetch();
        console.log(data);
      }
    });
  };
  const handleAdmin = email => {
    Swal.fire({
      title: "Are you sure?",
      text: " you want to make it an Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(`/user/${email}?role=admin`);
        refetch();
        console.log(data);
      }
    });
  };

  return (
    <div className="w-full p-8">
      <SectionTitle title="manage users" />

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="table  w-full ">
          {/* head */}
          <thead className="uppercase ">
            <tr>
              <th>sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Instructor</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="whitespace-nowrap">{user.name}</td>
                <td className="whitespace-nowrap">{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleInstructor(user.email)}
                    disabled={
                      user.role === "instructor" || user.role === "admin"
                    }
                    className="btn w-full btn-primary text-sm"
                  >
                    Make Instructor
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleAdmin(user.email)}
                    disabled={user.role === "admin"}
                    className="btn w-full btn-primary text-sm"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
