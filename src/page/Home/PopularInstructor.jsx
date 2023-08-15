import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import CardSkeleton from "../../components/cardSkeleton";
import InstructorCard from "../../components/InstructorCard";

const PopularInstructor = () => {
  const [ref, inView] = useInView();
  const [apiCalled, setApiCalled] = useState(false);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView && !apiCalled) {
      const fetchInstructors = async () => {
        try {
          const response = await axios.get(
            "https://summer-camp-two.vercel.app/instructor"
          );
          setInstructors(response.data);
          setApiCalled(true);
        } catch (error) {
          console.error("Error fetching instructors:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchInstructors();
    }
  }, [inView, apiCalled]);

  return (
    <div className="my-8 md:mx-8 mx-5" ref={ref}>
      <SectionTitle title="Popular Instructor" />

      {loading ? (
        <CardSkeleton cardCount={6} lineCount={3} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors?.map(instructor => (
            <InstructorCard instructor={instructor} key={instructor._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularInstructor;
