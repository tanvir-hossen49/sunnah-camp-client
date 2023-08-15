const ClassCard = ({
  singleClass,
  role,
  handleSelect,
  isSelected,
  enrolledCourse,
}) => {
  const isClassDisabled =
    role === "admin" ||
    role === "instructor" ||
    singleClass?.availableSeats === 0 ||
    isSelected(singleClass._id) ||
    enrolledCourse.includes(singleClass._id);

  return (
    <div key={singleClass._id} className="card card-side border">
      <figure className="w-1/2">
        <img
          src={singleClass.image}
          alt={singleClass.className}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body glass rounded-r-2xl p-5 w-2/3">
        <h2 className="card-title">{singleClass.className}</h2>
        <p>Instructor: {singleClass.instructorName}</p>
        <div className="flex justify-between">
          <p>Price: ${singleClass.price}</p>
          <p>Seat: {singleClass.totalSeats}</p>
        </div>
        <p>total Enrolled: {singleClass.availableSeats}</p>
        <div className="mt-2 text-right">
          <button
            onClick={event => handleSelect(event, singleClass)}
            className="btn btn-primary w-full"
            disabled={isClassDisabled}
          >
            {isClassDisabled ? "Not Available" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
