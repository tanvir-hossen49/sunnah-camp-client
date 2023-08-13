const AboutUs = () => {
  return (
    <div className="md:mx-8 mx-5">
      <div className="md:flex justify-center gap-5">
        <div className="md:w-1/2 text-center">
          <img
            src="https://i.ibb.co/C1kKwnz/download.webp"
            alt="a man play namaj"
            className="h-full w-full"
          />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <h3 className="text-3xl font-bold  mb-4">About Us</h3>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            dignissimos asperiores praesentium eos illo, alias consequuntur
            eligendi quisquam mollitia eius. em ipsum dolor sit amet consectetur
            adipisicing elit. Vel dignissimos asperiores praesentium eos illo,
            alias consequuntur eligendi quisquam mollitia eius.
          </p>

          <div className="flex justify-between items-center mt-5">
            <div>
              <h4 className=" hover:bg-yellow-300 duration-200 mx-auto md:text-2xl text-xl font-bold border-2 border-gray-500 md:w-24 md:h-24 w-16 h-16 rounded-full flex justify-center items-center">
                10+
              </h4>
              <p className="text-center  mt-3 text-xl ">Courses</p>
            </div>
            <div>
              <h4 className=" hover:bg-yellow-300 duration-200 mx-auto md:text-2xl text-xl font-bold border-2 border-gray-500 md:w-24 md:h-24 w-16 h-16 rounded-full flex justify-center items-center">
                15+
              </h4>
              <p className="text-center  mt-3 text-xl ">Instructors</p>
            </div>
            <div>
              <h4 className=" hover:bg-yellow-300 duration-200 mx-auto md:text-2xl text-xl font-bold border-2 border-gray-500 md:w-24 md:h-24 w-16 h-16 rounded-full flex justify-center items-center">
                100+
              </h4>
              <p className="text-center  mt-3 text-xl ">Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
