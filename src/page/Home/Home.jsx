import useTitle from "../../Hook/useTitle";
import Slider from "./Slider";
import StudentReview from "./StudentReview";
import PopularInstructor from "./PopularInstructor";
import PopularClass from "./PopularClass";
import Faq from "./Faq";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import HowToPray from "./HowToPray";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-20">
      <Slider />
      <PopularClass />
      <PopularInstructor />
      <OurServices />
      <HowToPray />
      <StudentReview />
      <Faq />
      <AboutUs />
    </div>
  );
};

export default Home;
