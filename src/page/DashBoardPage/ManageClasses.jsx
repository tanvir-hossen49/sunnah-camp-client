import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import ShowToast from "../../utility/ShowToast";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useTitle from "../../Hook/useTitle";

const ManageClasses = () => {
  useTitle("Manage Classes");
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const handleApproved = async (event, id) => {
    try {
      await axiosSecure.patch(`/classes/${id} `, {
        status: "approve",
      });
      ShowToast("success", "status updated");
      event.target.setAttribute("disabled", "disabled");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosSecure.get("/admin/all-classes").then(response => {
      setClasses(response.data);
    });
  }, [user?.email, axiosSecure]);

  return (
    <div className="w-full p-8">
      <SectionTitle title="Manage Classes" />

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="table  w-full ">
          {/* head */}
          <thead className="uppercase text-center">
            <tr>
              <th>sl</th>
              <th>class img</th>
              <th>class name</th>
              <th>name</th>
              <th>email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.image} />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap">{row.className}</td>
                <td className="whitespace-nowrap">{row.instructorName}</td>
                <td>{row.email}</td>
                <td>{row.seats}</td>
                <td>{row.price}</td>
                <td>
                  <span
                    className={` ${
                      row.status === "pending"
                        ? "bg-yellow-300  text-gray-800"
                        : row.status === "approve"
                        ? "bg-green-300  text-gray-800"
                        : row.status === "denied" && "bg-red-600 text-white"
                    }  p-2 rounded-lg`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="space-y-4">
                  <button
                    onClick={event => handleApproved(event, row._id)}
                    className="btn w-full btn-primary"
                    disabled={row.status === "approve"}
                  >
                    approved
                  </button>
                  <button className="btn w-full btn-warning">denied</button>
                  <button className="btn  w-full text-white">feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
