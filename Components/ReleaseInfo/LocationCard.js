import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Image from "next/image";

export const LocationCard = ({ location, length }) => {

  console.log(length)

  const address = `http://maps.google.com/?q=${location.Address}`;

  return (
    <Container length={length}>
      <ImageTitleContainer>
        <ImageContainer>
          <BrandImage src={location.img} height="100%" />
        </ImageContainer>
        <TitleSubtitleContainer>
          <h5>{location.location}</h5>
          <h6>{location.type}</h6>
        </TitleSubtitleContainer>
      </ImageTitleContainer>
      <p>{location.Description}</p>
      <a href={address}>
        <GoogleWrapper>
          <Image src="/Media/googlemaps.png" width="30" height="30" />
        </GoogleWrapper>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 10px;
  margin-bottom: 10px;

  p {
    padding: 10px;
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

const ImageTitleContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
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
  margin: 10px;
  @media (max-width: 375px) {
    margin: 0px;
  }
`;
