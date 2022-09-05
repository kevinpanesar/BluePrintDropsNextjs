import React from "react";
import styled from "styled-components";

export const OrderSummary = ({ cart,totalPrice, setActivatePaymentForm }: any) => {

    let estimatedTotal = +totalPrice(cart) + +15.00

  return (
    <Container>
        <h3>Order Summary</h3>
        <ItemWrapper>
            <ItemTitle>SUBTOTAL</ItemTitle>
            <ItemValue>{'$' + totalPrice(cart)} </ItemValue>
        </ItemWrapper>
        <ItemValue>{cart.length + (cart.length === 1? ' Item' : ' Items')}</ItemValue>
        <ItemWrapper>
            <ItemTitle>SHIPPING</ItemTitle>
            <ItemValue>{'$15.00'} </ItemValue>
        </ItemWrapper>
        <ItemWrapper>
            <ItemTitle>ESTIMATED TOTAL</ItemTitle>
            <ItemValue>{'$' + estimatedTotal.toFixed(2)} </ItemValue>
        </ItemWrapper>
        Taxes Calculated in Checkout
        <ContinueToCheckoutButton onClick={()=> setActivatePaymentForm(true)}>Continue To Checkout</ContinueToCheckoutButton>
    </Container>
  );
};

const Container = styled.div`
  width: 39%;
  height: fit-content;
  border: 1px solid #ddd;
  background-color: #f6f6f6f8;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  h3{
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between ;
  padding: 10px 0;
  width: 100%;
 border-top: 1px solid #ddd;
`;

const ItemTitle = styled.p`
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.5px;
  padding-right: 16px;
`;

const ItemValue = styled.p`
  font-size: 14px;
  padding-bottom:8px ;
`;

const ContinueToCheckoutButton = styled.button`
  color: #fff;
  background-color: #0e1111;
  border-color: #0e1111;
  width: 100%;
  margin-top: 10px;

  padding: 8px 14px;
  &:hover {
    background-color: #0e1111b6;
    border-color: #0e1111b6;
  }
`;