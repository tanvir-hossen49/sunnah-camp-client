import useTitle from "../../Hook/useTitle";
import Slider from "./Slider";
import StudentReview from "./StudentReview";
import PopularInstructor from "./PopularInstructor";
import PopularClass from "./PopularClass";
import Faq from "./Faq";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-10">
      <Slider />
      <PopularClass />
      <PopularInstructor />
      <StudentReview />
      <Faq />
    </div>
  );
};

export default Home;
