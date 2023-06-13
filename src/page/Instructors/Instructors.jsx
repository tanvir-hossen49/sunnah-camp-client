import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const Instructors = () => {
  const instructors = useLoaderData();

  return (
    <div className="mx-8 my-10">
      <SectionTitle title="All instructor" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors?.map(instructor => {
          return (
            <div
              key={instructor._id}
              className="card text-center glass space-y-5 p-5"
            >
              <div className="avatar">
                <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={instructor?.image} />
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold capitalize">
                  {instructor.instructorName}
                </h2>
                <p>
                  Email: <span className="lowercase">{instructor.email}</span>
                </p>
                <p>
                  Classes:{" "}
                  {instructor.classes.map((givenClass, index) => (
                    <span key={index} className="capitalize">
                      {givenClass}
                      {instructor.classes.length !== index + 1 && ","}{" "}
                    </span>
                  ))}
                </p>

                <button className="btn lg:w-1/2 w-full btn-primary">
                  See more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructors;
