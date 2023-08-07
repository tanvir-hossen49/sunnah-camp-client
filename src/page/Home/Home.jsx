import useTitle from "../../Hook/useTitle";
import Slider from "./Slider";
import StudentReview from "./StudentReview";
import PopularInstructor from "./PopularInstructor";
import PopularClass from "./PopularClass";
import Faq from "./Faq";
import AboutUs from "./AboutUs";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-20">
      <Slider />
      <PopularClass />
      <PopularInstructor />
      <StudentReview />
      <Faq />
      <AboutUs />
    </div>
  );
};

export default Home;
