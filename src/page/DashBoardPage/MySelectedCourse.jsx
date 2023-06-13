import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import ShowToast from "../../utility/ShowToast";

const MySelectedCourse = () => {
  const { user } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState([]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async () => {
      const { data } = await axios.delete(
        `http://localhost:3001/my-course/${id}`
      );
      if (data.deletedCount > 0) {
        ShowToast("success", "deleted course");
      }
    });
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:3001/my-course/${user?.email}`
      );
      setSelectedCourse(data);
    })();
  }, [user?.email]);

  return (
    <div className="w-full p-8">
      <SectionTitle title="My Selected Course" />

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
              <th>payment</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {selectedCourse.map((myCourse, index) => {
              const { _id, image, price, seat, courseName } = myCourse;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image} />
                      </div>
                    </div>
                  </td>
                  <td>{courseName}</td>
                  <td>${price}</td>
                  <td>{seat}</td>
                  <td>
                    <button className="btn btn-primary">Pay</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-warning"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedCourse;
