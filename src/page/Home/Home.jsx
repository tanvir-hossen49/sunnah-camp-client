import { Fade } from "react-awesome-reveal";
import useTitle from "../../Hook/useTitle";
import Slider from "./Slider";
import StudentReview from "./StudentReview";
import PopularInstructor from "./PopularInstructor";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-10">
      <Slider />
      <Fade cascade damping={0.1}>
        <PopularInstructor />
      </Fade>
      <Fade cascade damping={0.1}>
        <StudentReview />
      </Fade>
    </div>
  );
};

export default Home;
