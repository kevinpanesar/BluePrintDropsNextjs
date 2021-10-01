import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { getDate } from "date-fns";

export const SneakerCard = ({ cardInfo, switchShoe }) => {
  const releaseDay = getDate(new Date(cardInfo.date.replace(/, /g, "/")));
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
        </SubContainer2>
        <SubContainer></SubContainer>
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
`;

const ReleaseDateContainer = styled.div`
  width: 100%;
  height: 25%;
  background: #ffffff;
`;
const ReleaseText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 5px;
  line-height: 1.3;
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
  width: 100%;
`;

const ReleaseSubText = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 8px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 5px;
`;

const ImgContainer = styled.div`
  width: 90%;
  height: 92px;
`;