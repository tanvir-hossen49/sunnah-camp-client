import { useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import ShowToast from "../../utility/ShowToast";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useTitle from "../../Hook/useTitle";
import axios from "axios";
import ClassCard from "./ClassCard";
import ClassCardSkeleton from "../../components/ClassCardSkeleton";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [role, setRole] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useTitle("Classes");

  const handleSelect = async (event, selectedCourse) => {
    if (!user) {
      navigate("/signin");
      ShowToast("warn", "log in first");
    }

    try {
      const { data } = await axiosSecure.post("/add-course", {
        courseId: selectedCourse._id,
        image: selectedCourse.image,
        price: selectedCourse.price,
        totalSeats: selectedCourse.totalSeats,
        courseName: selectedCourse.className,
        email: user?.email,
      });
      if (data.insertedId) {
        ShowToast("success", "course added");
        event.target.setAttribute("disabled", "disabled");
      } else {
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
    const fetchUserRole = async () => {
      try {
        const { data } = await axios.get(
          "https://summer-camp-two.vercel.app/user/all-classes"
        );
        setClasses(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchUserRole = async () => {
        try {
          const { data } = await axiosSecure.get(`/users/${user.email}`);
          setRole(data.role);
        } catch (error) {
          console.log(error);
        }
      };

      const fetchUserCourse = async () => {
        try {
          const { data } = await axiosSecure.get(
            `/my-course/email/${user.email}`
          );
          setSelectedCourse(data);
        } catch (error) {
          console.log(error);
        }
      };

      const fetchEnrolledCourses = async () => {
        try {
          const response = await axiosSecure.get("/payment");
          const arr = response.data.map(ele => ele.courseId);
          setEnrolledCourse(arr);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      Promise.all([fetchUserRole(), fetchUserCourse(), fetchEnrolledCourses()]);
    }
  }, [user, axiosSecure]);

  return (
    <div className="my-8 mx-5 md:mx-8">
      <SectionTitle title="All Classes" />

      {loading ? (
        <ClassCardSkeleton cardCount={6} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes?.map(singleClass => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
              role={role}
              handleSelect={handleSelect}
              isSelected={isSelected}
              enrolledCourse={enrolledCourse}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
