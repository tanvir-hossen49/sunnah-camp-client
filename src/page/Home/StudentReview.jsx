import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle";
import { useInView } from "react-intersection-observer";
import Spinner from "../../components/Spinner";

const StudentReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView();
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    if (inView && !apiCalled) {
      const fetchReviews = async () => {
        try {
          const response = await axios.get(
            "https://summer-camp-two.vercel.app/reviews"
          );
          setReviews(response.data);
          setApiCalled(true);
        } catch (error) {
          console.error("Error fetching reviews:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchReviews();
    }
  }, [inView, apiCalled]);

  return (
    <section className="md:mx-8 mx-5" ref={ref}>
      <SectionTitle title="what out student says" />

      <Swiper navigation={true} modules={[Navigation]} className="my-10">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {reviews?.map(review => (
              <SwiperSlide key={review._id} className="md:px-12  space-y-6 ">
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    className="mx-auto"
                  />
                </div>
                <p className="md:mx-5 text-justify">{review.review}</p>
                <p className="text-center uppercase text-3xl font-semibold">
                  {review.student_name}
                </p>
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </section>
  );
};

export default StudentReview;
