import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { getDate } from "date-fns";

export const SneakerCard = ({ cardInfo, switchShoe }) => {
  const releaseDay = getDate(new Date(cardInfo.date.replace(/, /g, "/")));
  const date = cardInfo.date.replace(/, /g, "/");
  return (
    <Container>
      <ReleaseDateContainer>
        <DateText>{releaseDay}</DateText>
      </ReleaseDateContainer>
      <ReleasePriceContainer>
        <ImgContainer>
          <SneakerImg src={cardInfo.images[0]} height={450} width={625} />
        </ImgContainer>
        <SubContainer>
          <ReleaseText>Price</ReleaseText>
          <ReleaseText>{cardInfo.price}</ReleaseText>
        </SubContainer>
        <SubContainer2>
          <ReleaseText>{cardInfo.title}</ReleaseText>
          <SneakerCardDate>{date}</SneakerCardDate>
        </SubContainer2>
      </ReleasePriceContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 240px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
    @media (min-width: 450px) and (max-width: 768px) {
    height: 250px;
  }

  @media (min-width: 768px){
    height: 400px;
    margin-bottom: 50px;
  }
`;

const ReleasePriceContainer = styled.div`
  width: 90%;
  height: 60%;
  background: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
   @media (min-width: 768px){
    height: 400px;
    justify-content: space-between;
    text-align: center;
  }
`;

const ReleaseDateContainer = styled.div`
  width: 100%;
  height: 25%;
  background: #ffffff;
  z-index: 10;
`;
const ReleaseText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 5px;
  line-height: 1.3;
  @media (min-width: 375px) and (max-width: 426px) {
    font-size: 11px;
  }

  @media (min-width: 768px){
  font-family: "Poppins";
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
  }
`;

const DateText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 90px;
  text-align: right;
  letter-spacing: -5px;
  color: #f5f5f5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  left: 8px;
  bottom: 16px;
  line-height: 1;

  @media (max-width: 375px) {
    left: 3px;
    bottom: 14px;
    font-size: 80px;
  }

  @media (min-width: 375px) and (max-width: 426px) {
    left: -2px;
    bottom: 10px;
    font-size: 80px;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    font-size: 75px;
    left: 1px;
  }

    @media (min-width: 769px){
      font-size: 115px;
      left: 5px;
      color: C0C0C0;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  width: 100%;
  margin-bottom: 5px;
  line-height: 1;
  margin-top: 22px;
    @media (min-width: 768px){
    display: none;
  }
`;
const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  width: 100%;
  margin-bottom: 10px;
  line-height: 1;
`;

const SneakerImg = styled(Image)`
  width: 50%;
`;

const ImgContainer = styled.div`
  width: 90%;
  height: 92px;
  @media (min-width: 580px) and (max-width: 768px) {
    width: 75%;
  }
`;

const SneakerCardDate = styled.p`
  @media (min-width: 768px){
font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 21px;
display: flex;
letter-spacing: -0.02em;
width: 100%;
justify-content: center;
color: black;
  }
`