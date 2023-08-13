import SectionTitle from "../../components/SectionTitle";

const OurServices = () => {
  return (
    <div className="lg:mx-8 mx-5">
      <SectionTitle title="our services" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div>
          <figure className="h-[271px] w-full overflow-hidden rounded-sm">
            <img
              src="https://i.ibb.co/1T2rgJs/download.webp"
              alt="student sitting in class"
              className="w-full object-cover hover:scale-110 duration-200"
            />
          </figure>

          <h4 className="text-center text-3xl font-semibold text-yellow-400 my-3">
            Quality Eduction
          </h4>
          <p className="text-justify text-base px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, molestias.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit, molestias.
          </p>
        </div>
        <div className="overflow-hidden">
          <figure className="h-[271px] w-full overflow-hidden rounded-sm">
            <img
              src="https://i.ibb.co/rdcdjHx/download.webp"
              alt="a teacher was teaching"
              className="w-full object-cover hover:scale-110 duration-200"
            />
          </figure>

          <h4 className="text-center text-3xl font-semibold text-yellow-400 my-3">
            Quran Teaching
          </h4>
          <p className="text-justify text-base px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptate quas veritatis officiis nihil odit neque dolor illum
            consectetur soluta.
          </p>
        </div>
        <div>
          <figure className="h-[271px] w-full overflow-hidden rounded-sm">
            <img
              src="https://i.ibb.co/G3MS8g3/services-4-1.webp"
              alt="a man was sitting"
              className="w-full object-cover hover:scale-110 duration-200"
            />
          </figure>

          <h4 className="text-center text-3xl font-semibold  text-yellow-400 my-3">
            Islamic Morals
          </h4>
          <p className="text-justify text-base px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos
            quas ipsum! Autem facilis earum animi molestias quos optio amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
