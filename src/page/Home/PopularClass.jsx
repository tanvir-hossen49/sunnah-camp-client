import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import CardSkeleton from "../../components/cardSkeleton";
import { useInView } from "react-intersection-observer";

const PopularClass = () => {
  const [ref, inView] = useInView();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    if (inView && !apiCalled) {
      const fetchClasses = async () => {
        try {
          const response = await axios.get(
            "https://summer-camp-two.vercel.app/popular-classes"
          );
          setClasses(response.data);
          setApiCalled(true);
        } catch (error) {
          console.error("Error fetching classes:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchClasses();
    }
  }, [inView, apiCalled]);

  return (
    <div className="my-8 md:mx-8 mx-5" ref={ref}>
      <SectionTitle title="Popular Class" />
      {loading ? (
        <CardSkeleton cardCount={6} lineCount={3} />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-3 gap-y-5">
          {classes?.map(instructor => (
            <div key={instructor._id} className="card card-side border w-full">
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
                  Available Seats:
                  <span className="font-medium">
                    {" "}
                    {instructor.availableSeats}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularClass;
