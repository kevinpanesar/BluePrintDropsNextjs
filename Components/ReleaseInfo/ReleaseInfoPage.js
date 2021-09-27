import { React } from "react";
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

export const ReleaseInfoPage = ({ data }) => {
  return (
    <Container>
      <ImageSlider data={data} />
      <ShareIcons />
      <ReleaseCard data={data} />

      <LocationsContainer>
        <Accordion defaultActiveKey="0" flush>
          {data.cities !== undefined
            ? Object.keys(data.cities).map((element, index) => {
                return (
                  <Accordion.Item
                    id="accordion-item"
                    eventKey={index}
                    key={index}
                  >
                    <Accordion.Header id="accordion-header">
                      {element}
                    </Accordion.Header>
                    <AccordionBody id="accordion-body">
                      {data !== undefined
                        ? data.cities[element].map((element, index) => (
                            <LocationCard location={element} key={index} />
                          ))
                        : null}
                    </AccordionBody>
                  </Accordion.Item>
                );
              })
            : null}
        </Accordion>
      </LocationsContainer>
      <NavBar data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const LocationsContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  margin: 20px auto;
`;
