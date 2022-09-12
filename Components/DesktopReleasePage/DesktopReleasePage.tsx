import React from "react";
import styled from "styled-components";
import { ImageSlider } from "../ReleaseInfo/ImageSlider";
import Accordion from "react-bootstrap/Accordion";
import { ReleaseCard } from "../ReleaseInfo/ReleaseCard";
import { LocationCard } from "../ReleaseInfo/LocationCard";
import dynamic from "next/dynamic";
import { ShareIcons } from "../ShareIcons/ShareIcons";
import { NavBar } from "../NavBar/NavBar";
import { ThumbnailSlider } from "./DesktopSlider";
import { OnlineLinkCards } from "../DesktopOnlineLinkCard/OnlineLinkCards";
import { Footer } from "../Footer/Footer";
import { OnlineLinkCardsProps } from "../DesktopOnlineLinkCard/OnlineLinkCards";

export interface DesktopReleasePageProps {
  data: {
    title: string;
    date: string;
    _id: string;
    colorway: string;
    price: string;
    mensFlag: boolean;
    womensFlag: boolean;
    kidsFlag: boolean;
    cities: {city: {location: string, type: string, Description: string, img: string}[]};
    images: string[];
    OnlineLinks: {
      CanadianLinks: {title: string, type: string, img: string, link: string}[];
      USALinks: {title: string, type: string, img: string, link: string}[];
      InternationalLinks: {title: string, type: string, img: string, link: string}[];
    };
  };
}

interface LocationProps {
  img: string;
  type: string;
  location: string;
  date: string;
  Description: string;
  Address: string;
}

export const DesktopReleasePage = ({ data }: DesktopReleasePageProps) => {
  let cities = Object.keys(data.cities);

  // let raffleOnOff = cities?.map((element) => {
  //   return data.cities[element].some((element) => {
  //     if (element.type === "Raffle") {
  //       return true;
  //     }
  //   });
  // });

  return (
    <Container desktop={true}>
      <ContentContainer>
        <SliderShareIconsReleaseCardCont>
          <ThumbnailSlider data={data} />
          <ShareIcons desktop={true} mobile={false} />
          <ReleaseCard data={data} desktop={true} />
        </SliderShareIconsReleaseCardCont>
        <LocationsContainer>
          <LocalTitle>Local Retailers</LocalTitle>
          {data.cities !== undefined
            ? Object.keys(data.cities)?.map((city: string, index: number) => {
                return (
                  <Body key={index}>
                    {data !== undefined
                      ? data.cities[city]?.map(
                          (element: LocationProps, index: number) => (
                            <LocationCard
                              location={element}
                              data={data}
                              key={index}
                              length={data.cities[city].length}
                              desktop={true}
                            />
                          )
                        )
                      : null}
                  </Body>
                );
              })
            : null}
          <LocalTitle>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
              height="22px"
            />
            Canadian Links
          </LocalTitle>
          <Body>
            {data?.OnlineLinks !== undefined
              ? data?.OnlineLinks?.CanadianLinks?.map(
                  (links: OnlineLinkCardsProps["link"], index: number) => {
                    return (
                      <OnlineLinkCards
                        link={links}
                        key={index}
                        length={data?.OnlineLinks.CanadianLinks.length}
                        desktop={true}
                      />
                    );
                  }
                )
              : null}
          </Body>
          <LocalTitle>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
              height="22px"
            />
            USA Links
          </LocalTitle>
          <Body>
            {data?.OnlineLinks !== undefined
              ? data?.OnlineLinks.USALinks?.map(
                  (links: OnlineLinkCardsProps["link"], index: number) => {
                    return (
                      <OnlineLinkCards
                        link={links}
                        key={index}
                        length={data?.OnlineLinks.USALinks.length}
                        desktop={true}
                      />
                    );
                  }
                )
              : null}
          </Body>
          <LocalTitle>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
              height="22px"
            />
            International Links
          </LocalTitle>
          <Body>
            {data?.OnlineLinks !== undefined
              ? data?.OnlineLinks.InternationalLinks?.map(
                  (links: OnlineLinkCardsProps["link"], index: number) => {
                    return (
                      <OnlineLinkCards
                        link={links}
                        key={index}
                        length={data?.OnlineLinks.InternationalLinks.length}
                        desktop={true}
                      />
                    );
                  }
                )
              : null}
          </Body>
        </LocationsContainer>

        {/* {raffleOnOff.includes(true) && <NavBar data={data} />} */}
      </ContentContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div<{ desktop: boolean }>`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 70%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 2500px) {
    padding-top: 20px;
    width: 70%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 2500px) {
    width: 100%;
  }
`;

const LocationsContainer = styled.div`
  margin: 0px auto;
  overflow: auto;
  height: 90vh;
  width: 40%;
  padding-right: 15px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }

  @media (min-width: 1024px) and (max-width: 1500px) {
    width: 45%;
  }

  @media (min-width: 1500px) and (max-width: 2000px) {
    width: 40%;
  }

  @media (min-width: 2000px) {
    width: 35%;
  }
`;

const SliderShareIconsReleaseCardCont = styled.div`
  width: 55%;
  height: 100%;

  @media (min-width: 2500px) {
    width: 55%;
  }
`;

const LocalTitle = styled.p`
  font-weight: 600;
  margin-top: 10px;
  font-size: 26.9032px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  img {
    margin-right: 10px;
  }

  @media (min-width: 2500px) {
    margin-top: 10px;
    font-size: 26.9032px;

    img {
      margin-right: 10px;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  border-bottom: 2px solid #c0c0c0;

  &:last-child {
    border-bottom: 2px solid white;
  }

  /* @media (min-width: 2500px){
  width: 100%;
    border-bottom: 2px solid #c0c0c0;

  &:last-child {
    border-bottom: 2px solid white;
    padding-bottom: 0px;
    padding-top: 10px;
  }
    } */
`;
