import { useParams } from "react-router-dom";
import img from "../../assets/banner/coverphoto.png";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Spinner from "../../components/Spinner";

const Profile = () => {
  const [instructor, setInstructor] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  const { email } = useParams();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get(
          `https://summer-camp-two.vercel.app/class/all-class/${instructor?.email}`
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchInstructor = async () => {
      try {
        const response = await axiosSecure.get(
          `https://summer-camp-two.vercel.app/users/instructor/${email}`
        );
        setInstructor(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    Promise.all([fetchClasses(), fetchInstructor()]);
  }, [axiosSecure, instructor?.email, email]);

  return (
    <div className="min:h-screen md:mx-8 mx-5">
      <div className="relative ">
        <img
          src={img}
          className="w-full  h-[200px] object-cover"
          alt="cover photo"
        />
        <img
          src={instructor?.image}
          className=" w-44 h-44 rounded-full -mt-24"
          alt="profile image"
        />
      </div>

      <div className="my-5 text-2xl font-bold capitalize">
        <h4>{instructor?.name}</h4>
      </div>

      <div>
        <SectionTitle title="Classes" />

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-3 gap-y-5">
            {classes?.map(instructorClass => (
              <div
                key={instructorClass._id}
                className="card card-side border w-full"
              >
                <figure className=" w-1/3  overflow-hidden">
                  <img
                    src={instructorClass?.image}
                    alt={instructorClass?.className}
                    className="w-full h-full hover:scale-110 duration-200"
                  />
                </figure>
                <div className="card-body justify-center glass rounded-r-2xl p-5 w-2/3">
                  <h2 className="card-title">{instructorClass?.className}</h2>
                  <p className="text-base">
                    Price:{" "}
                    <span className="font-medium">
                      ${instructorClass?.price}
                    </span>
                  </p>
                  <p className="text-base">
                    Total Seats:
                    <span className="font-medium">
                      {instructorClass?.totalSeats}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {classes.length === 0 && "NO classes available"}
      </div>
    </div>
  );
};

export default Profile;
