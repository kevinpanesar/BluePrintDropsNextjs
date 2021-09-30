import { React, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Header } from "../Header/Header";
import Menu from "../sideMenu/Menu";
import SideNavBar from "../sideMenu/SideNavBar";
import Link from "next/link";

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
            width="763px"
            height="711px"
          />
          <ImageHighlight />
        </ImageDiv>

        <LargeText>ABOUT US</LargeText>
        <AboutUsDescription>
          We are a team of dedicated and focused individuals that love fashion,
          sneakers and everything "HYPE". We started off with a passion for
          collecting sneakers. Through years of trying to get our hands on
          limited sneakers, we discovered that it was a very tedious and
          grueling process about getting information on drops let alone actually
          purchasing the item. Theres been countless times we have struck out on
          sneaker drops, wether it be from our names not beeing drawn from
          raffles or missing out on entering raffles due to the lack of
          information about releases in our area. So, thats when we decided to
          create this platform called Blueprint.
        </AboutUsDescription>
        <SocialMediaContainer>
          <IGCardFlex>
            <AboutImageDiv>
              <SneakerImg
                src="/Media/kevin.jfif"
                width="398px"
                height="398px"
              />
            </AboutImageDiv>

            <NameSocialMediaContainer>
              <Name>Kevin Panesar</Name>
              <Occupation>Developer</Occupation>
              <FollowContainer>
                <p>@k.panesar_</p>
                <IGContainer>
                  <Link href="https://www.instagram.com/k.panesar_/">
                    <InstagramLogo
                      src="/Media/instagram-logo.png"
                      width="512px"
                      height="512px"
                    />
                  </Link>
                </IGContainer>
              </FollowContainer>
            </NameSocialMediaContainer>
          </IGCardFlex>
          <FavShoeContainer>
            <FavoriteShoe>Favorite Sneaker: Jordan 6 Infrared</FavoriteShoe>
          </FavShoeContainer>
        </SocialMediaContainer>
        <SocialMediaContainer>
          <IGCardFlex>
            <AboutImageDiv>
              <SneakerImg
                src="/Media/param.jpg"
                width="259px"
                height="232px"
              />
            </AboutImageDiv>
            <NameSocialMediaContainer>
              <Name>Paramvir Poonia</Name>
              <Occupation>Designer</Occupation>
              <FollowContainer>
                <p>@paramvirpoonia</p>
                <IGContainer>
                  <Link href="https://www.instagram.com/paramvirpoonia/">
                    <InstagramLogo
                      src="/Media/instagram-logo.png"
                      width="512px"
                      height="512px"
                    />
                  </Link>
                </IGContainer>
              </FollowContainer>
            </NameSocialMediaContainer>
          </IGCardFlex>
          <FavShoeContainer>
            <FavoriteShoe>
              Favorite Sneaker: Nike AirMax 1 Parra Patta{" "}
            </FavoriteShoe>
          </FavShoeContainer>
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

const IGCardFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const FavShoeContainer = styled.div`
  width: 100%;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  padding-bottom: 10px;
`;

const Name = styled.p`
  font-size: 22px;
`;

const Occupation = styled.p`
  font-size: 19px;
  color: #a9a9a9;
`;

const FavoriteShoe = styled.p`
  font-size: 18px;
  font-family: "Share";
  margin-left: 20px;
  padding-bottom: 10px;
`;

const IGContainer = styled.div`
  width: 30px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

const InstagramLogo = styled(Image)`
  width: 30px;
  margin-left: 25px;
`;

const SneakerImg = styled(Image)`
  z-index: 100;
`;

const LargeText = styled.p`
  color: white;
  font-size: 60px;
  font-family: "Zen Tokyo Zoo";
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
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const NameSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  padding-left: 20px;
  width: 70%;
  margin: 10px;
  p {
    font-family: "Share";
    margin-bottom: 0;
  }
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
  font-family: "Share";
  font-size: 30px;
  line-height: 1.3125;
`;

const AboutUsDescription = styled.p`
  color: white;
  font-family: "Share";
  width: 85%;
  font-size: 24px;
  line-height: 1.1;
  padding-bottom: 20px;
`;
