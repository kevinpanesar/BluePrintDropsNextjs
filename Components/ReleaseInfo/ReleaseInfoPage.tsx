import React from "react";
import styled from "styled-components";
import { ImageSlider } from "./ImageSlider";
import { LocationInfo } from "./LocationInfo";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { ReleaseCard } from "./ReleaseCard";
import { LocationCard } from "./LocationCard";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ShareIcons } from "../ShareIcons/ShareIcons";
import { NavBar } from "../NavBar/NavBar";

const AccordionBody = dynamic(import("react-bootstrap/esm/AccordionBody"), {
  ssr: false,
});

interface ReleaseInfoPageProps {
  data: {
    _id: string;
    title: string;
    date: string;
    colorway: string;
    price: number;
    mensFlag: boolean;
    womensFlag: boolean;
    kidsFlag: boolean;
    cities: {
      [key: string]: {
        location: string;
        type: string;
        Description: string;
        img: string;
        date: string;
        Address: string;
      }[];
    };
    images: string[];
    OnlineLinks: {
      CanadianLinks: {
        title: string;
        type: string;
        img: string;
        link: string;
      }[];
      USALinks: { title: string; type: string; img: string; link: string }[];
      InternationalLinks: {
        title: string;
        type: string;
        img: string;
        link: string;
      }[];
    };
  };
}

interface ElementProps {
  img: string;
  location: string;
  type: string;
  Description: string;
  date: string;
  Address: string;
}

export const ReleaseInfoPage = ({ data }: ReleaseInfoPageProps) => {
  const cities = Object.keys(data.cities);

  const raffleOnOff = cities?.map((element: string) => {
    return data.cities[element].some((element: { type: string }) => {
      if (element.type === "Raffle") {
        return true;
      }
    });
  });
  // const raffleButtonOnOff = data.cities.filter((element) => {
  //   element.some((element) => element.type.includes("Raffle"));
  // });

  return (
    <Container>
      <div>
        <ImageSlider data={data} />
        <ShareIcons mobile={true} desktop={false} />
        <ReleaseCard data={data} desktop={false} />
      </div>
      <LocationsContainer>
        <Accordion defaultActiveKey="0" flush>
          {data.cities !== undefined
            ? Object.keys(data.cities)?.map((city: string, index: number) => {
                return (
                  <Accordion.Item
                    id="accordion-item"
                    eventKey={index.toString()}
                    key={index}
                  >
                    <Accordion.Header id="accordion-header">
                      {city}
                    </Accordion.Header>
                    <AccordionBody id="accordion-body">
                      {data !== undefined
                        ? data.cities[city]?.map(
                            (element: ElementProps, index: number) => (
                              <LocationCard
                                location={element}
                                key={index}
                                length={data.cities[city].length}
                                desktop={false}
                                data={{
                                  title: "",
                                  _id: "",
                                }}
                              />
                            )
                          )
                        : null}
                    </AccordionBody>
                  </Accordion.Item>
                );
              })
            : null}
        </Accordion>
      </LocationsContainer>
      {raffleOnOff.includes(true) && <NavBar data={data} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f1f0f057;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LocationsContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  margin: 20px auto;
`;

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
