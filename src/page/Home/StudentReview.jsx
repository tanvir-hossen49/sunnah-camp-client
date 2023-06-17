import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle";

const StudentReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/reviews")
      .then(data => setReviews(data.data));
  }, []);

  return (
    <section>
      <SectionTitle title="what out student says" />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-10"
      >
        {reviews.map(review => (
          <SwiperSlide key={review._id} className="px-12 space-y-6 ">
            <div className="flex justify-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="mx-auto"
              />
            </div>

            <p className="mx-10">{review.review}</p>
            <p className="text-center uppercase text-3xl font-semibold">
              {review.student_name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StudentReview;
