import React from "react";
import styled from "styled-components";
import Link from 'next/link'


export const Footer = () => {

    return (
        <Container>
            <TopContainer>
                <Logo>BluePrint</Logo>
                <StyledMenu>
                    <Link id="navText" href={"/"}>
                        <NavPages>Sneaker Releases</NavPages>
                    </Link>
                    <Link href={"/clothing-releases"}>
                        <NavPages>Clothing Releases</NavPages>
                    </Link>
                    <Link href={"/clothing-releases"}>
                        <NavPages>Tools</NavPages>
                    </Link>
                    <Link href={"/about"}>
                        <NavPages>About Us</NavPages>
                    </Link>
                </StyledMenu>
                <SocialMediaContainer>
                    <FollowUsText>Follow Us</FollowUsText>
                    <SocialMediaIconsContainer>
                        <SocialMediaIcons src="/Media/tiktok.svg" />
                        <SocialMediaIcons src="/Media/IG.svg" />
                        <SocialMediaIcons src="/Media/twitter.svg" />
                    </SocialMediaIconsContainer>
                </SocialMediaContainer>
            </TopContainer>
            <LowerContainer>
                <LowerTextContainer>
                    <Link href={"/clothing-releases"}>
                        <LowerContainerText>© Copyright 2021 blueprintdrops.com</LowerContainerText>
                    </Link>
                    <Link href={"/clothing-releases"}>
                        <LowerContainerText>Terms & Conditions</LowerContainerText>
                    </Link>
                    <Link href={"/clothing-releases"}>
                        <LowerContainerText>Privacy Policy</LowerContainerText>
                    </Link>
                </LowerTextContainer>
            </LowerContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  background: #E7EAED;
  margin-top: 20px;
  padding: 10px;
  `

const Logo = styled.p`
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;
letter-spacing: -0.02em;
`
const TopContainer = styled.div`
height: 70%;
width: 85%;
margin: 0 auto;
padding-top: 10px;
padding-bottom: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavPages = styled.a`
  color: #606368;
  text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 14.136px;
line-height: 17px;

border-right: 2px solid #606368;
text-align: center;
padding: 0 20px; 

@media (min-width: 768px) and (max-width: 1024px)  {
    font-size: 12px;
    padding: 0 10px;
    }


  &:last-child {
    border-right: none;


};
`
const SocialMediaContainer = styled.div`
display: flex;
flex-direction: column;
width: 12%;
`
const FollowUsText = styled.p`
font-size: 14px;
line-height: 12px;
text-align: center;
`
const SocialMediaIconsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const SocialMediaIcons = styled.img`
width: 15%;
`

const LowerContainer = styled.div`
height: 30%;
display: flex;
flex-direction: row;
justify-content: center;

`

const LowerTextContainer = styled.div`
width: 90%;
padding: 20px;
border-top: 1px solid #C0C0C0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`


const LowerContainerText = styled.a`
  color: #606368;
  text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 17px;
letter-spacing: -0.02em;
border-right: 1px solid #606368;
text-align: center;
padding: 0 20px;


  &:last-child {
    border-right: none;
};
`