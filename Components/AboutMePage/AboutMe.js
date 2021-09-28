import { React, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Header } from "../Header/Header";
import Menu from "../sideMenu/Menu";
import SideNavBar from "../sideMenu/SideNavBar";

export const AboutMePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header />
      <div>
        <SideNavBar open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Content>
        <LargeText>PURPOSE</LargeText>
        <PurposeContainer>
          <AboutUs>
            Providing you all anticipated sneaker and clothing release
            information in the metro vancouver area.
          </AboutUs>
        </PurposeContainer>
        <ImageDiv>
          <SneakerImg
            src="/Media/aboutUsImage.jpg"
            width="836px"
            height="972px"
          />
          <ImageHighlight />
        </ImageDiv>

        <LargeText>ABOUT US</LargeText>
        <AboutUsDescription>
          We are two guys that have a passion for collecting sneakers and
          collecting grailed items. We have many times struck out on sneaker
          drops, wether it be from raffle draws or missing out on entering
          raffles due to the lack of information about releases in our area.
          Thats when we decided on creating a platform for all people like us
          that are interested in staying alert on when and where they can cop
          the latest hyped sneaker, clothes or merch drops.
        </AboutUsDescription>
        <SocialMediaContainer>
          <AboutImageDiv>
            <SneakerImg src="/Media/kevin.jfif" width="398px" height="398px" />
          </AboutImageDiv>
          <IGContainer>
            <InstagramLogo
              src="/Media/instagram-logo.png"
              width="512px"
              height="512px"
            ></InstagramLogo>
          </IGContainer>
        </SocialMediaContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-family: "Inter", sans-serif;
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

const IGContainer = styled.div`
  width: 30px;
`;

const InstagramLogo = styled(Image)`
  width: 30px;
`;

const SneakerImg = styled(Image)`
  z-index: 100;
`;

const LargeText = styled.p`
  color: white;
  font-size: 60px;
  font-family: "Zen Tokyo Zoo", cursive;
  margin-top: 35px;
  margin-bottom: 10px;
`;

const ImageHighlight = styled.div`
  position: absolute;
  top: 20px;
  right: 13px;
  border: 3px solid #fdd017;
  width: 100%;
  height: 100%;
  z-index: 50;
`;

const SocialMediaContainer = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  background-color: black;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

const PurposeContainer = styled.div`
  width: 90%;
  background-color: white;
  padding: 5px;
`;

const ImageDiv = styled.div`
  background-size: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  bottom: 10px;
  left: 25px;
  padding-left: 10px;
  z-index: 100px;
`;

const AboutImageDiv = styled.div`
  margin-right: auto;
  margin-left: 10px;
  margin-top: 10px;
  flex-direction: row;
  padding-left: 10px;
  z-index: 100px;
  width: 35%;
  padding-bottom: 20px;
`;
const AboutUs = styled.p`
  width: 80%;
  font-family: "Share", "cursive";
  font-size: 30px;
  line-height: 1.3125;
`;

const AboutUsDescription = styled.p`
  color: white;
  font-family: "Share", "cursive";
  width: 85%;
  font-size: 24px;
  line-height: 1.1;
  padding-bottom: 20px;
`;
