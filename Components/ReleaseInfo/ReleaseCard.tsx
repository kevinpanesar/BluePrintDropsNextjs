import React,{useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { MensWomensKidsIcons } from "../mensWomensKidsSelector/MensWomensKidsIcons";

interface ReleaseCardProps{
  data:{
    title : string,
    date: string,
    colorway: string,
    price: string,
    mensFlag: boolean;
    womensFlag: boolean;
    kidsFlag: boolean;
    images: string[],
  },
  desktop: boolean
}

export const ReleaseCard = ({ data, desktop } : ReleaseCardProps) => {
  return (
    <Container desktop={desktop}>
      <TitleContainer>
        <div>{data.title}</div>
      </TitleContainer>
      <PriceDateContainer>
        <Labels>
          <p>PRICE:</p>
          <p>RELEASE DATE:</p>
          <p>STYLE CODE:</p>
          <p>COLOR:</p>
          <MensWomensKidsIcons data={data} />
        </Labels>
        <Values>
          <p>{data.price}</p>
          <p>{format(new Date(data.date.replace(/, /g, "/")), "PPP")}</p>
          {/* <p>{data.styleCode}</p> */}
          <p>#12341234</p>
          <p>{data.colorway}</p>
        </Values>
      </PriceDateContainer>
    </Container>
  );
};

const Container = styled.div<{ desktop: boolean }>`
  width: 90%;
  margin: 0 auto;
  background: #21587f;
  border-radius: ${(props) => {
    if (props.desktop) {
      return "5px";
    } else {
      return "22px";
    }
  }};
  color: white;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
const TitleContainer = styled.div`
  width: 90%;
  height: 50%;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-top: 9px;
  border-bottom: 1px solid #c0c0c0;
  padding-bottom: 5px;
`;

const PriceDateContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  @media (min-width: 768px){
    width: 50%;
    margin-right: auto;
    margin-left: 20px;
  }
`;
const Labels = styled.div`
  width: 50%;
  height: 100%;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: flex-start;
  font-size: 14px;
  letter-spacing: 1px;
  p {
    margin-bottom: 8px;
  }
`;
const Values = styled.div`
  width: 50%;
  height: 100%;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: flex-start;
  font-size: 14px;

  p {
    margin-bottom: 8px;
  }
`;
