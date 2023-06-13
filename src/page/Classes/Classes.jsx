import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const Classes = () => {
  const classes = useLoaderData();
  console.log(classes);
  return (
    <div className="my-8 mx-10">
      <SectionTitle title="All Classes" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map(singleClass => (
          <div key={singleClass._id} className="card card-side border">
            <figure className=" w-1/3">
              <img src={singleClass.image} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body glass rounded-r-2xl p-5 w-2/3">
              <h2 className="card-title">{singleClass.className}</h2>
              <p>Instructor: {singleClass.instructorName}</p>
              <div className="flex justify-between">
                <p>Price: ${singleClass.price}</p>
                <p>Seat: {singleClass.seats}</p>
              </div>
              <div className="mt-2 text-right">
                <button className="btn btn-primary md:w-1/2 w-full">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
