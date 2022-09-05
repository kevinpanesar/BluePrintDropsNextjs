import React from "react";
import styled from "styled-components";
import { CheckoutItems } from "./CheckoutItems";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const CheckoutPreviewPage = () => {

    const cart = useSelector((state: RootState) => {
        return state.clothing.cart;
      });

    const totalPrice = (cartArray : any) => {
        let total = 0;
        cartArray.forEach((element : any) => {
          total =  element.price + total;
        });

        total = Math.round(total * 100) / 100;

        return total.toFixed(2)
    }

  return (
    <Container>
        <h1>My Cart</h1>
        <CheckoutPrice>{'$' + totalPrice(cart)}</CheckoutPrice>
        <CheckoutItemsWrapper>
            {cart.map((data : any, index: number) => {
                return <CheckoutItems key={index} data={data} />
            })}
        </CheckoutItemsWrapper>
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

  h1{
    margin-top: 100px;
    font-weight: 900;
    font-size: 48px;
  }
`;

const CheckoutItemsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const CheckoutPrice = styled.p`
        font-weight: 700;
    font-size:18px;
    line-height: 1.2;
    margin: 0.5rem 0 32px 0;
    letter-spacing: 1.1px ;
`