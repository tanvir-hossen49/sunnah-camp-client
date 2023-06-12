import axios from "axios";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import ShowToast from "../../utility/ShowToast";

const ManageClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  const handleApproved = async id => {
    try {
      await axios.patch(`http://localhost:3001/classes/${id} `, {
        status: "approve",
      });
      ShowToast("success", "status updated");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios("http://localhost:3001/all-classes").then(response => {
      setClasses(response.data);
    });
  }, [user?.email]);

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
                      row.status === "pending" && "bg-yellow-300  text-gray-800"
                    }  ${
                      row.status === "approved" && "bg-green-300  text-gray-800"
                    }  ${
                      row.status === "denied" && "bg-red-600 text-white"
                    } p-2 rounded-lg`}
                  >
                    pending
                  </span>
                </td>

                <td className="space-y-4">
                  <button
                    onClick={() => handleApproved(row._id)}
                    className="btn w-full btn-primary"
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
