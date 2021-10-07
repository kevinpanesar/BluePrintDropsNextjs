import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export const LocationCard = ({ location, length, desktop, data }) => {
  const address = `http://maps.google.com/?q=${location.Address}`;
  let button;

  if (desktop) {
    if (location.type.toLowerCase().includes("raffle")) {
      button = (
        <Link href={"/RaffleGenerator/" + data.title + "_" + data._id}>
          <RaffleButton>Generate Raffles</RaffleButton>
        </Link>
      );
    } else {
      button = (
        <RaffleButton disabled={true} disabled>
          FCFS
        </RaffleButton>
      );
    }
  }

  return (
    <Container length={length}>
      <LeftContainer>
        <ImageTitleContainer>
          <ImageContainer desktop={desktop}>
            <BrandImage src={location.img} width="110%" />
          </ImageContainer>
          <TitleSubtitleContainer>
            <StoreName desktop={desktop}>
              <a href={address}>{location.location}</a>
            </StoreName>
            <h6>
              <strong>{location.date}</strong>
            </h6>
          </TitleSubtitleContainer>
        </ImageTitleContainer>
        <DropDescription>
          <h6>
            <strong>{location.type}</strong>
          </h6>
          <p>{location.Description}</p>
        </DropDescription>
        {!desktop && (
          <a href={address}>
            <GoogleWrapper>
              <Image src="/Media/googlemaps.svg" width="30" height="30" />
            </GoogleWrapper>
          </a>
        )}
      </LeftContainer>
      <RightContainer>{button}</RightContainer>
    </Container>
  );
};

const Container = styled.div`
height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding-bottom: 10px;
  margin-bottom: 10px;

  p {
    margin-bottom: 0px;
    @media (max-width: 375px) {
      padding: 3px;
    }
  }

  &:first-child {
    border-bottom: 2px solid #c0c0c0;
  }

  &:last-child {
    border-top: ${(props) => {
    if (props.length > 2) {
      return "2px solid #c0c0c0";
    } else {
      return "null";
    }
  }};
    padding-bottom: 0px;
    padding-top: 10px;
  }
`;

const StoreName = styled.p`
  font-size: ${(props) => (props.desktop ? "15.5px" : "20px")};
  padding: 0px;
  a {
    text-decoration: none;
    color: black;
    width: 100%;
  }
`;

const ImageTitleContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 10px;

  h6 {
    margin-bottom: 2px;
  }
`;

const ImageContainer = styled.div`
  border-radius: ${(props) => (props.desktop ? "2.24194px" : "10px")};
  overflow: hidden;
  margin: 10px 10px 15px 0px;
  width: 80px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  align-content: center;
`;

const BrandImage = styled.img``;

const GoogleWrapper = styled.div`
  margin: 5px;
  @media (max-width: 375px) {
    margin: 0px;
  }
`;

const DropDescription = styled.div`
  width: 90%;
  margin-bottom: 5px;

   @media (min-width: 768px) and (max-width: 1024px)  {
    font-size: 14.5px;
    }
`;
const LeftContainer = styled.div`
  width: ${(props) => (props.desktop ? "70%" : "80%")};
`;

const RightContainer = styled.div`
  width: ${(props) => (props.desktop ? "30%" : null)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RaffleButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#C0C0C0" : "#21587f")};
  margin: 10px;
  padding: ${(props) =>
    props.disabled ? "6.72581px 17.9355px" : "0px 7.9355px"};
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14.6935px;
  border-radius: 4.4px;
  color: white;
  border: ${(props) =>
    props.disabled ? "2px solid #C0C0C0" : "2px solid #21587f"};

  :hover {
    background-color: ${(props) => (props.disabled ? "#C0C0C0" : "#253f51")};
  }

   @media (min-width: 768px) and (max-width: 1024px)  {
    font-size: 12.6935px;
    }
`
  

  
