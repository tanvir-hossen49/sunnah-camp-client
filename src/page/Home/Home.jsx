import useTitle from "../../Hook/useTitle";
import Slider from "./Slider";
import StudentReview from "./StudentReview";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-10">
      <Slider />
      {/* <StudentReview /> */}
    </div>
  );
};

export default Home;
