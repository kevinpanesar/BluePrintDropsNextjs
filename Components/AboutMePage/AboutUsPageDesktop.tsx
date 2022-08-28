import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Header } from "../Header/Header";
import SideNavBar from "../sideMenu/SideNavBar";
import Link from "next/link";
import { DesktopMenu } from "../desktopMenu/DesktopMenu";

export const AboutMePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <Header type="desktop" />
        <DesktopMenu aboutUsPage={true} type="desktop"/>
      </HeaderContainer>
      <SliderContainer>
        {/* <AboutUsSlider /> */}
      </SliderContainer>
      <SliderTextContainer>
        <SliderTitle>Your One Stop For Drop</SliderTitle>
        <SliderText>We are the leading destination for locals in the metro vancouver area on getting their daily scoop on the latest sneaker drops and contemporary fashion.</SliderText>
        </SliderTextContainer>
        <PurposeContainer>hello</PurposeContainer>
    </Container>
  );
};

const PurposeContainer = styled.div`
background-color: #2B2929;
height: 300px;
position: relative;
`

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: space-evenly;
  padding-bottom: 20px;
  overflow: hidden;

  h1 {
    margin: 15px;
  }

  h2 {
    margin: 12px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border-bottom: 1px solid white;

    @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    padding: 10px 20px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 29px;
    width: 100%;
    padding: 10px 20px;
  }

  @media (min-width: 1441px) {
    font-size: 29px;
    width: 85%;
    padding: 10px 20px;
  }

  @media (min-width: 1900px) and (max-width: 2500px) {
    width: 75%;
  }

  @media (min-width: 2500px) {
    width: 70%;
  }
`;

const SliderContainer = styled.div`
  height: 650px;
  box-shadow: inset 1000px 4px 4px rgba(0, 0, 0, 0.9);
  overflow: hidden;
  position: absolute;
  z-index: -1;
  top: 0;
    @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80%;
  }

  @media (min-width: 1441px) and (max-width: 1900px) {
    width: 70%;
  }

  @media (min-width: 1900px) and (max-width: 2500px) {
    width: 60%;
  }

  @media (min-width: 2500px) {
    width: 55%;
  }
`;

const SliderTextContainer = styled.div`
position: absolute;
  left:0;
  right:0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 30%;
  z-index: 100;
  margin-top: 550px;
  color: white;
  text-align: center;
`
const SliderTitle = styled.p`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 59px;
`
const SliderText = styled.p`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
margin-top: 20px;
`