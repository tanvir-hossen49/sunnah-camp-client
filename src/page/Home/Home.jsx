import useTitle from "../../Hook/useTitle";
import Slider from "./Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-10">
      <Slider />
    </div>
  );
};

export default Home;
