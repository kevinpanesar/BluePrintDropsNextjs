import { React } from "react";
import styled from "styled-components";
import { ImageSlider } from "../ReleaseInfo/ImageSlider";
import Accordion from "react-bootstrap/Accordion";
import { ReleaseCard } from "../ReleaseInfo/ReleaseCard";
import { LocationCard } from "../ReleaseInfo/LocationCard";
import dynamic from "next/dynamic";
import { ShareIcons } from "../ShareIcons/ShareIcons";
import { NavBar } from "../NavBar/NavBar";
import { DesktopSlider } from "./DesktopSlider";

export const DesktopReleasePage = ({ data }) => {
  let cities = Object.keys(data.cities);

  let raffleOnOff = cities.map((element) => {
    return data.cities[element].some((element) => {
      if (element.type === "Raffle") {
        return true;
      }
    });
  });

  return (
    <Container desktop={true}>
      <SliderShareIconsReleaseCardCont>
        <DesktopSlider data={data} />
        <ShareIcons desktop={true} mobile={false} />
        <ReleaseCard data={data} desktop={true} />
      </SliderShareIconsReleaseCardCont>
      <LocationsContainer>
        <LocalTitle>Local Retailers</LocalTitle>
        {data.cities !== undefined
          ? Object.keys(data.cities).map((city, index) => {
              return (
                <Body>
                  {data !== undefined
                    ? data.cities[city].map((element, index) => (
                        <LocationCard
                          location={element}
                          data={data}
                          key={index}
                          length={data.cities[city].length}
                          desktop={true}
                        />
                      ))
                    : null}
                </Body>
              );
            })
          : null}
        <LocalTitle>USA Links</LocalTitle>
        <LocalTitle>International Links</LocalTitle>
      </LocationsContainer>

      {/* {raffleOnOff.includes(true) && <NavBar data={data} />} */}
    </Container>
  );
};

const Container = styled.div`
  width: 75%;
  background-color: white;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const LocationsContainer = styled.div`
  margin: 0px auto;
  overflow: auto;
  height: 85vh;
  width: 40%;
  font-family: "Inter";
`;

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SliderShareIconsReleaseCardCont = styled.div`
  width: 55%;
`;

const LocalTitle = styled.p`
  font-weight: 600;
  font-size: 26.9032px;
  font-family: "Inter";
`;

const Body = styled.div`
  width: 100%;
  border-bottom: 2px solid #c0c0c0;

  &:last-child {
    border-bottom: 2px solid white;
    padding-bottom: 0px;
    padding-top: 10px;
  }
`;
