import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import ShowToast from "../../utility/ShowToast";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useTitle from "../../Hook/useTitle";

const Classes = () => {
  const classes = useLoaderData();
  const [role, setRole] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  useTitle("Classes");
  
  const handleSelect = async (event, selectedCourse) => {
    if (!user?.email) {
      navigate("/signin");
      ShowToast("warn", "log in first");
    }

    try {
      const { data } = await axiosSecure.post("/add-course", {
        courseId: selectedCourse._id,
        image: selectedCourse.image,
        price: selectedCourse.price,
        seat: selectedCourse.seats,
        courseName: selectedCourse.className,
        email: user?.email,
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

  const isSelected = id => {
    return selectedCourse.find(course => course.courseId === id);
  };

  useEffect(() => {
    (async () => {
      if (user) {
        const { data } = await axiosSecure.get(`/users/${user?.email}`);
        setRole(data.role);
      }
    })();
  }, [user, axiosSecure]);

  useEffect(() => {
    if (user)
      (async () => {
        const { data } = await axiosSecure.get(`/my-course/${user?.email}`);
        setSelectedCourse(data);
      })();
  }, [user, axiosSecure]);

  return (
    <div className="my-8 mx-10">
      <SectionTitle title="All Classes" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes?.map(singleClass => (
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
                  onClick={event => handleSelect(event, singleClass)}
                  className="btn btn-primary md:w-1/2 w-full"
                  disabled={
                    role === "admin" ||
                    role === "instructor" ||
                    isSelected(singleClass._id)
                  }
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
