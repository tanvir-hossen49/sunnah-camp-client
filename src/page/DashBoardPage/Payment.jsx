import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const selectedCourse = useLoaderData();
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_Payment_Gateway_Key}`
  );
  return (
    <div className="p-8 mt-20">
      <SectionTitle title="payment" />

      <Elements stripe={stripePromise}>
        <CheckOutForm selectedCourse={selectedCourse} />
      </Elements>
    </div>
  );
};
export default Payment;
