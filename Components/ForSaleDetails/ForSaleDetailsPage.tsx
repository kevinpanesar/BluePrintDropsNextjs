import React from "react";
import styled from "styled-components";
import { ImageSlider } from "../ReleaseInfo/ImageSlider";
import Accordion from "react-bootstrap/Accordion";
import { ReleaseCard } from "../ReleaseInfo/ReleaseCard";
import { LocationCard } from "../ReleaseInfo/LocationCard";
import dynamic from "next/dynamic";
import { ShareIcons } from "../ShareIcons/ShareIcons";
import { Footer } from "../Footer/Footer";
import { ItemDetails } from "./ItemDetails";
import { ThumbnailSlider } from "../DesktopReleasePage/DesktopSlider";

interface PropTypes{
  data: {
    title: string;
    date: string;
    _id: string;
    colorway: string;
    price: number;
    qty: number;
    mensFlag: boolean;
    availableSizeQty: Record<string, number>,
    skuNumber: string;
    womensFlag: boolean;
    kidsFlag: boolean;
    shoe: boolean,
    clothing: boolean,
    cities: {[key: string]: {location: string, type: string, Description: string, img: string, date: string, Address: string}[]};
    images: string[];
    description: string;
    OnlineLinks: {
      CanadianLinks: {title: string, type: string, img: string, link: string}[];
      USALinks: {title: string, type: string, img: string, link: string}[];
      InternationalLinks: {title: string, type: string, img: string, link: string}[];
    };
  };
}

export const DesktopForSaleDetails = ({data}: PropTypes) => {


  return (
    <Container desktop={true}>
      <ShoeDetailsWrapper>
      <ImageContainer>
        <ThumbnailSlider data={data}/>
        <ImageSlider data={data}/>
      </ImageContainer>
     <ItemDetails data={data} />
      </ShoeDetailsWrapper>

      <Footer />
    </Container>
  );
};

const Container = styled.div<{ desktop: boolean }>`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 70%;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 2500px) {
    padding-top: 20px;
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100% ;
  }
`;

const ShoeDetailsWrapper = styled.div`
 height: 650px; 
display: flex ;
flex-direction:row ;
align-items: center ;

@media (max-width: 768px) {
    flex-direction: column ;
    height: auto ;
  }
`

const ImageContainer = styled.div`
width: 60%;
background-color: white;
height: 100% ;
`