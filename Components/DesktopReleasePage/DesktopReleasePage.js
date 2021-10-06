import { React } from "react";
import styled from "styled-components";
import { ImageSlider } from "../ReleaseInfo/ImageSlider";
import Accordion from "react-bootstrap/Accordion";
import { ReleaseCard } from "../ReleaseInfo/ReleaseCard";
import { LocationCard } from "../ReleaseInfo/LocationCard";
import dynamic from "next/dynamic";
import { ShareIcons } from "../ShareIcons/ShareIcons";
import { NavBar } from "../NavBar/NavBar";
import { ThumbnailSlider } from "./DesktopSlider";
import { OnlineLinkCards } from '../DesktopOnlineLinkCard/OnlineLinkCards'
import { Footer } from "../Footer/Footer";
``

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
      <ContentContainer>
        <SliderShareIconsReleaseCardCont>
          <ThumbnailSlider data={data} />
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
          <LocalTitle><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" height="22px" />Canadian Links</LocalTitle>
          <Body >
            {data.OnlineLinks !== undefined
              ? data.OnlineLinks.CanadianLinks.map((links, index) => {
                return (
                  <OnlineLinkCards
                    link={links}
                    key={index}
                    length={data.OnlineLinks.CanadianLinks.length}
                    desktop={true} />
                );
              })
              : null}
          </Body>
          <LocalTitle><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" height="22px" />USA Links</LocalTitle>
          <Body >
            {data.OnlineLinks !== undefined
              ? data.OnlineLinks.USALinks.map((links, index) => {
                return (
                  <OnlineLinkCards
                    link={links}
                    key={index}
                    length={data.OnlineLinks.USALinks.length}
                    desktop={true} />
                );
              })
              : null}
          </Body>
          <LocalTitle><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" height="22px" />International Links</LocalTitle>
          <Body >
            {data.OnlineLinks !== undefined
              ? data.OnlineLinks.InternationalLinks.map((links, index) => {
                return (
                  <OnlineLinkCards
                    link={links}
                    key={index}
                    length={data.OnlineLinks.InternationalLinks.length}
                    desktop={true} />
                );
              })
              : null}
          </Body>
        </LocationsContainer>

        {/* {raffleOnOff.includes(true) && <NavBar data={data} />} */}
      </ContentContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

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
  margin-top: 10px;
  font-size: 26.9032px;
  font-family: "Inter";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  img{
    margin-right: 10px;
  }
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
