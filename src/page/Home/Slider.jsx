import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import hajj from "../../assets/banner/hajj.jpeg";
import quran from "../../assets/banner/quran.avif";

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide
          className="!h-[600px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("${quran}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex  ml-16 items-center text-white">
            <div className="md:w-1/2 w-3/4 text-justify">
              <p className="text-base uppercase">Learn Quran</p>
              <h2 className="lg:text-5xl font-bold mt-2">
                {"Allah is with the patient."}
              </h2>
              <p className="my-5">
                Learning the Quran is an essential pursuit for Muslims as it
                provides spiritual guidance, moral teachings, and a deeper
                understanding of Islam.
              </p>
              <button className="btn bg-white text-black hover:text-white ">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="!h-[550px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("${hajj}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex  ml-16 items-center text-white">
            <div className="md:w-1/2 w-3/4 text-justify">
              <p className="text-base uppercase">All about hajj</p>
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mt-2">
                JOURNEY OF THE HEARTS
              </h2>
              <p className="my-5">
                The single most important and magnificent experience for a
                Muslim: Hajj. A demonstration of submission to Allah and
                solidarity of the ummah.
              </p>
              <button className="btn bg-white text-black hover:text-white ">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
