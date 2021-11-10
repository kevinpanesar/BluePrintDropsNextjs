import { React, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Header } from "../Header/Header";
import Menu from "../sideMenu/Menu";
import SideNavBar from "../sideMenu/SideNavBar";
import Link from "next/link";
import { DesktopMenu } from "../desktopMenu/DesktopMenu";
import { AboutUsSlider } from "./AboutUsSlider";

export const AboutMePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <DesktopMenu aboutUsPage={true} />
      </HeaderContainer>
      <SliderContainer>
        <AboutUsSlider />
      </SliderContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
`;

const SliderContainer = styled.div`
  height: 550px;
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  top: 0;
`;
