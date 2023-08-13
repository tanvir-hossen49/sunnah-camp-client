import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import Spinner from "../../components/Sinner";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          "https://summer-camp-two.vercel.app/instructor"
        );
        setInstructors(response.data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="my-8 md:mx-8 mx-5">
      <SectionTitle title="Popular Instructor" />

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors?.map(instructor => (
            <div key={instructor._id} className="card card-side border">
              <figure className=" w-4/12  overflow-hidden">
                <img
                  src={instructor.image}
                  alt=""
                  className="w-full h-full hover:scale-110 duration-200"
                />
              </figure>
              <div className="card-body justify-center glass rounded-r-2xl p-5 w-8/12">
                <h2 className="card-title">{instructor.name}</h2>
                <p className="">Total Student: {instructor.student}</p>

                <Link to={`/profile/${instructor.email}`}>
                  <button className="btn mt-3 w-full btn-primary">
                    See more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularInstructor;
