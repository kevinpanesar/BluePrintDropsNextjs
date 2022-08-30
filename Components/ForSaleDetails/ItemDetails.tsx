import React from "react";
import styled from "styled-components";

export const ItemDetails = () => {


  return (
      <ItemDetailsContainer>
      <ItemTitle>
        Jordan Retro 6
      </ItemTitle>
      <MensWomensKidsTag>
        Men&apos;s
      </MensWomensKidsTag>
      <Colorway>
      Grey/White
      </Colorway>
      <Price>$175.00</Price>
      <SizeContainer>
        <SizeItem>5.0</SizeItem>
        <SizeItem>7.0</SizeItem>
        <SizeItem>8.0</SizeItem>
        <SizeItem>9.0</SizeItem>
        <SizeItem>10.0</SizeItem>
        <SizeItem>11.0</SizeItem>
        <SizeItem>8.0</SizeItem>
        <SizeItem>9.0</SizeItem>
        <SizeItem>10.0</SizeItem>
        <SizeItem>11.0</SizeItem>
      </SizeContainer>
      <AddToCartButton>Add To Cart</AddToCartButton>
      </ItemDetailsContainer>
  );
};

const ItemDetailsContainer = styled.div`
width: 40% ;
background-color: grey;
height: 100% ;
border: 19px solid white;
display: flex;
flex-direction: column;
padding: 16px;
`
const ItemTitle = styled.h1`
font-size: 36px;
font-weight: 900 ;
`
const MensWomensKidsTag = styled.p`
color: #515151;
font-size: 14px ;
margin-top: 4px;
`

const Colorway = styled.p`
color: #757575;
font-size: 14px ;
margin-top: 4px;
`

const Price = styled.p`
    color: #383838;
    font-size: 16px;

`

const SizeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap ;
    margin: 16px 0px;
`

const SizeItem = styled.div`
    width: 42px;
    height: 42px;
    background-color:#f5f5f5;
    margin-top: 8px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px ;
`

const AddToCartButton = styled.button`
    color: #fff;
    background-color: #0e1111;
    border-color: #0e1111;
    padding: 8px 14px;

`