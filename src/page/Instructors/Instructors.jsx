import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useTitle from "../../Hook/useTitle";
import axios from "axios";
import InstructorCard from "./InstructorCard";
import Spinner from "../../components/Sinner";

const Instructors = () => {
  useTitle("Instructor");
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          "https://summer-camp-two.vercel.app/all-instructors"
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
    <div className="mx-8 my-10">
      <SectionTitle title="All instructor" />

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors?.map(instructor => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Instructors;
