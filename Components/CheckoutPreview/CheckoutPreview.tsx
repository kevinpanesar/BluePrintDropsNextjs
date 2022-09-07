import React, { useState } from "react";
import styled from "styled-components";
import { CheckoutItems } from "./CheckoutItems";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { OrderSummary } from "./OrderSummary";
import { PaymentForm } from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export const CheckoutPreviewPage = () => {
  const [activatePaymentForm, setActivatePaymentForm] = useState(false);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  console.log(stripePromise);
  const [clientSecret, setClientSecret] = React.useState("");
  const totalPrice = (cartArray: any) => {
    let total = 0;
    cartArray.forEach((element: any) => {
      total = element.price + total;
    });

    total = Math.round(total * 100) / 100;
    total = Math.floor(total);

    return total;
  };

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://sneaker-mern-app.herokuapp.com/createPaymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total: totalPrice(cart) * 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    clientSecret,
  };

  const cart = useSelector((state: RootState) => {
    return state.clothing.cart;
  });

  return (
    <Container>
      <h1>My Cart</h1>
      <CheckoutPrice>{"$" + totalPrice(cart)}</CheckoutPrice>
      <SectionWrapper>
        <CheckoutItemsWrapper>
          {!activatePaymentForm &&
            cart.map((data: any, index: number) => {
              return <CheckoutItems key={index} data={data} />;
            })}
          {activatePaymentForm && clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          )}
        </CheckoutItemsWrapper>
        <OrderSummary
          cart={cart}
          totalPrice={totalPrice}
          setActivatePaymentForm={setActivatePaymentForm}
          activatePaymentForm={activatePaymentForm}
        />
      </SectionWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 96%;
  margin: 0 auto;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 2500px) {
    padding-top: 20px;
    width: 70%;
  }

  h1 {
    margin-top: 100px;
    font-weight: 900;
    font-size: 48px;
  }
`;

const CheckoutItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 65%;
`;
const CheckoutPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  margin: 0.5rem 0 32px 0;
  letter-spacing: 1.1px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
