// import { loadStripe } from "@stripe/stripe-js";
// import CheckOutForm from "./CheckOutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../hooks/useCart";

import useTitle from "../../Hook/useTitle";

const Payment = () => {
  useTitle("Payment");
  //   const [cart] = useCart();
  //   const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
  //   const price = cart.reduce((acc, curr) => {
  //     acc += curr.price;
  //     return acc;
  //   }, 0);
  //   return (
  //     <div className="p-8 h-full flex justify-center items-center flex-col">
  //       <h2 className="text-3xl uppercase text-center font-semibold mb-5">
  //         Payment
  //       </h2>
  //       <Elements stripe={stripePromise}>
  //         <CheckOutForm price={price} cart={cart} />
  //       </Elements>
  //     </div>
  //   );
};

export default Payment;
