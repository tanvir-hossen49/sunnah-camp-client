import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import ShowToast from "../../utility/ShowToast";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ selectedCourse }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: selectedCourse.data.price })
      .then(res => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, selectedCourse.data.price]);

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        //saved payment info in db
        const paymentInfo = {
          courseId: selectedCourse.data._id,
          className: selectedCourse.data.className,
          image: selectedCourse.data.image,
          price: selectedCourse.data.price,
          email: user?.email,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axiosSecure.post("/payment", paymentInfo).then(res => {
          if (res.data.insertedId) {
            ShowToast("success", "payment successful");
            navigate("/dashboard/my-selected-course");

            axiosSecure.delete(`/my-course/${selectedCourse.data._id}`);
          }
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className=" text-center">
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-primary md:w-1/2 r w-full mt-5"
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-300">{cardError}</p>}
    </>
  );
};
export default CheckOutForm;
