import { useLoaderData } from "react-router-dom";
import img from "../../assets/banner/coverphoto.png";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import Spinner from "../../components/Sinner";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Profile = () => {
  const { data } = useLoaderData();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get(
          `https://summer-camp-two.vercel.app/class/all-class/${data?.email}`
        );
        setClasses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [axiosSecure, data?.email]);
  return (
    <div className="min:h-screen md:mx-8 mx-5">
      <div className="relative ">
        <img
          src={img}
          className="w-full  h-[200px] object-cover"
          alt="cover photo"
        />
        <img
          src={data?.image}
          className=" w-44 h-44 rounded-full -mt-24"
          alt="profile image"
        />
      </div>

      <div className="my-5 text-2xl font-bold capitalize">
        <h4>{data?.name}</h4>
      </div>

      <div>
        <SectionTitle title="Classes" />

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-3 gap-y-5">
            {classes?.map(instructor => (
              <div
                key={instructor._id}
                className="card card-side border w-full"
              >
                <figure className=" w-1/3  overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.className}
                    className="w-full h-full hover:scale-110 duration-200"
                  />
                </figure>
                <div className="card-body justify-center glass rounded-r-2xl p-5 w-2/3">
                  <h2 className="card-title">{instructor.className}</h2>
                  <p className="text-base">
                    Price:{" "}
                    <span className="font-medium">${instructor.price}</span>
                  </p>
                  <p className="text-base">
                    Total Seats:
                    <span className="font-medium">
                      {" "}
                      {instructor.totalSeats}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {classes.length === 0 && "NO classes avalilalble"}
      </div>
    </div>
  );
};

export default Profile;
