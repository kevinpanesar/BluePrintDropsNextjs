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
    margin-bottom: 35px;
  }

  @media (min-width: 768px) and (max-width: 1024px){
      height: 230px;
  }

  @media (min-width: 1024px) and (max-width: 1205px){
    height: 240px;
  }

  @media (min-width: 1205px) and (max-width: 1440px){
    height: 260px;
  }

    @media (min-width: 1441px) and (max-width: 1900px){
    height: 300px;
  }

  @media (min-width: 1900px) and (max-width: 2500px){
    height: 340px;
  }

  @media (min-width: 2500px){
    height: 370px;
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
    
  @media (min-width: 768px) and (max-width: 1024px){
    height: 230px;
    text-align: center;
  }

   @media (min-width: 1024px) and (max-width: 1205px){
    height: 240px;
  }

  @media (min-width: 1205px) and (max-width: 1440px){
    height: 260px;
  }

   @media (min-width: 1441px) and (max-width: 1900px){
    height: 300px;
  }

  @media (min-width: 1900px) and (max-width: 2500px){
    height: 340px;
  }

   @media (min-width: 2500px){
    height: 370px;
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
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  z-index: 5;


  @media (min-width: 375px) and (max-width: 426px) {
    font-size: 11px;
  }

  @media (min-width: 768px){
     text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px){
    font-size: 13px;
    line-height: 12px;
  }

  @media (min-width: 1024px) and (max-width: 1440px){
     font-size: 12px;
    line-height: 13px;
  
  }

    @media (min-width: 1441px) and (max-width: 1800px){
    font-size: 14px;
    line-height: 15px;
  }


    @media (min-width: 1800px) and (max-width: 1900px){
    font-size: 15px;
    line-height: 16px;
  }

  @media (min-width: 1900px){
    font-size: 17px;
    line-height: 18px;
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

    @media (min-width: 768px) and (max-width: 1024px){
      font-size: 70px;
      left: 0px;
      top: 2px;
  }

  @media (min-width: 1024px) and (max-width: 1440px){
     font-size: 70px;
      left: -4px;
      bottom: 4px;
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
    margin-top: 10px;
  }


`;
const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: #ffffff;
  width: 100%;
  line-height: 1;

   @media (min-width: 768px){
   align-items: center;
  }

  @media (min-width: 1024px) and (max-width: 1205px){
    margin-top: 15px;
  }

  @media (min-width: 1205px) and (max-width: 1440px){
    margin-top: 30px;
  }

  @media (min-width: 1441px) and (max-width: 1800px){
    margin-top: 50px;
  }

     @media (min-width: 1800px) and (max-width: 1900px){
      margin-top: 70px;
  }

   @media (min-width: 1900px) and (max-width: 2500px){
    margin-top: 75px;
  }

   @media (min-width: 2500px){
    margin-top: 105px;
  }

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
display: none;
font-family: 'Poppins';
font-style: normal;
font-weight: normal;
letter-spacing: -0.02em;
width: 100%;
justify-content: center;
color: black;
margin: 0 auto;
text-align: center;

@media (min-width: 769px) {
  display: block;
}

  @media (min-width: 768px) and (max-width: 1024px){
font-size: 15px;
line-height: 21px;
}

 @media (min-width: 1024px) and (max-width: 1440px){
     font-size: 16px;
  }

    @media (min-width: 1900px){
    font-size: 17px;
  }
`