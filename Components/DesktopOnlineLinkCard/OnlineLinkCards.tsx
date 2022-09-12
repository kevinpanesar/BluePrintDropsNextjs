import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export interface OnlineLinkCardsProps {
  link: {
    img: string;
    title: string;
    type: string;
    Description?: string;
    link: string;
  };
  length: number;
  desktop: boolean;
}

export const OnlineLinkCards = ({
  link,
  length,
  desktop,
}: OnlineLinkCardsProps) => {
  return (
    <Container length={length}>
      <LeftContainer desktop={desktop}>
        <ImageTitleContainer>
          <ImageContainer desktop={desktop}>
            <BrandImage referrerPolicy="no-referrer" src={link.img} width="110%" />
          </ImageContainer>
          <TitleSubtitleContainer>
            <StoreName desktop={desktop}>{link.title}</StoreName>
            <h6>{link.type}</h6>
          </TitleSubtitleContainer>
        </ImageTitleContainer>
        <DropDescription>
          {link.Description && <p>{link.Description}</p>}
        </DropDescription>
      </LeftContainer>
      <RightContainer desktop={desktop}>
        <Link href={link.link}>
          <RaffleButton>Link</RaffleButton>
        </Link>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div<{ length: number }>`
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

const StoreName = styled.p<{ desktop: boolean }>`
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
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const ImageContainer = styled.div<{ desktop: boolean }>`
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
  width: 70%;
  margin-bottom: 5px;
`;
const LeftContainer = styled.div<{ desktop: boolean }>`
  width: ${(props) => (props.desktop ? "70%" : "80%")};
`;

const RightContainer = styled.div<{ desktop: boolean }>`
  width: ${(props) => (props.desktop ? "30%" : "0%")};
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
`;
