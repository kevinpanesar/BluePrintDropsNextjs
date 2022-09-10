import React,{useEffect} from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../store/store";
import { removeItemsFromCart } from "../../store/ClothingReleaseInfo";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

export const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const [user, loading, error]: any = useAuthState(firebase.auth() as any);
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );



    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: any) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error }: any = await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3001/for-sale",
        },
      })
     
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  background-color: #f6f6f6f8;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  padding: 15px;
  width: 95%;
  @media (max-width: 768px) {
    width: 100% ;
  }

  button {
    color: #fff;
    background-color: #0e1111;
    border-color: #0e1111;
    width: 35%;
    margin-top: 15px;
    margin-right: 10px;
    padding: 8px 12px;
    &:hover {
      background-color: #0e1111b6;
      border-color: #0e1111b6;
    }
  }
`;
