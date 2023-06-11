import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import useAuth from "../Hook/useAuth";
import { Edit2 } from "lucide-react";

const MyClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/classes?email=${user?.email}`).then(
      response => {
        setClasses(response.data);
      }
    );
  }, [user?.email]);
  return (
    <div className="w-full p-8">
      <SectionTitle title="my classes" />

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="table  w-full">
          {/* head */}
          <thead className="uppercase  ">
            <tr>
              <th></th>
              <th>Img</th>
              <th>class name</th>
              <th>price</th>
              <th>total seats</th>
              <th>total enrolled</th>
              <th>status</th>
              <th>feedback</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {classes.map((myClass, index) => (
              <tr key={myClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={myClass.image} />
                    </div>
                  </div>
                </td>
                <td>{myClass.className}</td>
                <td>${myClass.price}</td>
                <td>{myClass.seats}</td>
                <td>0</td>
                <td>
                  <span
                    className={` ${
                      myClass.status === "pending" &&
                      "bg-yellow-300  text-gray-800"
                    }  ${
                      myClass.status === "approve" &&
                      "bg-green-300  text-gray-800"
                    }  ${
                      myClass.status === "denied" && "bg-red-600 text-white"
                    } p-2 rounded-lg`}
                  >
                    {myClass.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm">show </button>
                </td>
                <td>
                  <button className="btn btn-circle ">
                    <Edit2 />
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

export default MyClasses;
