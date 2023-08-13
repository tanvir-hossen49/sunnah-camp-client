import { Link } from "react-router-dom";
const InstructorCard = ({ instructor }) => {
  return (
    <div className="card text-center glass space-y-5 p-5">
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

        <Link to={`/profile/${instructor.email}`}>
          <button className="btn mt-3 w-full btn-primary">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
