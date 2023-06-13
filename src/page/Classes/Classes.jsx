import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import ShowToast from "../../utility/ShowToast";
import axios from "axios";

const Classes = () => {
  const classes = useLoaderData();
  const [role, setRole] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelect = async (event, id) => {
    if (!user?.email) {
      navigate("/signin");
      ShowToast("warn", "log in first");
    }

    try {
      const { data } = await axios.post("http://localhost:3001/add-course", {
        courseId: id,
      });
      if (data.insertedId) {
        ShowToast("success", "course added");
        event.target.setAttribute("disabled", "disabled");
      } else {
        event.target.setAttribute("disabled", "disabled");
        ShowToast("error", data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:3001/users/${user?.email}`
      );
      setRole(data.role);
    })();
  }, [user?.email]);

  return (
    <div className="my-8 mx-10">
      <SectionTitle title="All Classes" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map(singleClass => (
          <div key={singleClass._id} className="card card-side border">
            <figure className=" w-1/3">
              <img src={singleClass.image} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body glass rounded-r-2xl p-5 w-2/3">
              <h2 className="card-title">{singleClass.className}</h2>
              <p>Instructor: {singleClass.instructorName}</p>
              <div className="flex justify-between">
                <p>Price: ${singleClass.price}</p>
                <p>Seat: {singleClass.seats}</p>
              </div>
              <div className="mt-2 text-right">
                <button
                  onClick={event => handleSelect(event, singleClass._id)}
                  className="btn btn-primary md:w-1/2 w-full"
                  disabled={role === "admin" || role === "instructor"}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
