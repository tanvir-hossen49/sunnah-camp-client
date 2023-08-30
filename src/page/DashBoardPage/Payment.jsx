import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Payment = () => {
  const selectedCourse = useLoaderData();
  const [axiosSecure] = useAxiosSecure();
  const [selectedCourseId, setSelectedCourseId] = useState("");

  useEffect(() => {
    axiosSecure(`/my-course/${selectedCourse.data._id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("sunnah-camp")}`,
      },
    }).then(res => {
      setSelectedCourseId(res.data);
    });
  }, [selectedCourse.data._id, axiosSecure]);

  const stripePromise = loadStripe(
    `${import.meta.env.VITE_Payment_Gateway_Key}`
  );

  return (
    <div className="p-8 mt-20">
      <SectionTitle title="payment" />

      <Elements stripe={stripePromise}>
        <CheckOutForm
          selectedCourse={selectedCourse}
          selectedCourseId={selectedCourseId}
        />
      </Elements>
    </div>
  );
};
export default Payment;
