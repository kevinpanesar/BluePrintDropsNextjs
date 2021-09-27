import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Image from "next/image";

export const LocationCard = ({ location }) => {
  // const locationData = useSelector((state) => {

  //     if (state.sneaker.currentSneakerInfo == undefined) {
  //         return state.sneaker.allSneakerInfo[0].locations;
  //     }

  //     return state.sneaker.currentSneakerInfo.cities;

  // })

  const address = `http://maps.google.com/?q=${location.Address}`;

  return (
    <Container>
      <ImageTitleContainer>
        <ImageContainer>
          <img src={location.img} width="60px" />
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
  background-color: #f5f5f5;
  p {
    padding: 10px;
  }
  border: 1px solid #b8b8b8;
  border-radius: 10px;
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
  width: 60px;
  height: 60px;
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

const GoogleMapsImg = styled(Image)``;

const GoogleWrapper = styled.div`
  margin: 10px;
`;
const TitleImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
