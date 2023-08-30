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
    <div key={singleClass._id} className="border">
      <figure className="">
        <img
          src={singleClass.image}
          alt={singleClass.className}
          className="w-full h-[250px] object-cover"
        />
      </figure>
      <div className="card-body glass rounded-r-2xl p-5 ">
        <h2 className="card-title">{singleClass.className}</h2>
        <p className="text-lg">{singleClass.instructorName}</p>
        <div className="flex justify-between items-center">
          <p className="w-1/2">Price: ${singleClass.price}</p>
          <p className="w-1/2">Total Seat: {singleClass.totalSeats}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="w-1/2">Available seat: {singleClass.availableSeats}</p>
          <p className="w-1/2">Enrolled: {singleClass.totalEnrolled}</p>
        </div>

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
