import { Link } from "react-router-dom";
const InstructorCard = ({ instructor }) => {
  return (
    <div key={instructor._id} className="card card-side border">
      <figure className=" w-4/12  overflow-hidden">
        <img
          src={instructor.image}
          alt={instructor.image}
          className="w-full h-full hover:scale-110 duration-200"
        />
      </figure>
      <div className="card-body justify-center glass rounded-r-2xl p-5 w-8/12">
        <h2 className="card-title">{instructor.name}</h2>
        <p className="">Total Student: {instructor.student}</p>

        <Link to={`/profile/${instructor.email}`}>
          <button className="btn mt-3 w-full btn-primary">View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
