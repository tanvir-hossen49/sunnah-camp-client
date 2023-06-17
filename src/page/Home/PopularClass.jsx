import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/popular-classes").then(res => {
      setClasses(res.data);
    });
  });

  return (
    <div className="my-8 mx-10">
      <SectionTitle title="Popular Class" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes?.map(instructor => (
          <div key={instructor._id} className="card card-side border">
            <figure className=" w-4/12  overflow-hidden">
              <img
                src={instructor.image}
                alt=""
                className="w-full h-full hover:scale-110 hover:duration-200"
              />
            </figure>
            <div className="card-body justify-center glass rounded-r-2xl p-5 w-8/12">
              <h2 className="card-title">{instructor.instructorName}</h2>
              <p>{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
