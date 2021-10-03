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

const AccordionBody = dynamic(import("react-bootstrap/esm/AccordionBody"), {
    ssr: false,
});

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
        <Container>
            <SliderShareIconsReleaseCardCont>
                <DesktopSlider data={data} />
                <ShareIcons />
                <ReleaseCard data={data} />
            </SliderShareIconsReleaseCardCont>
            <LocationsContainer>
                <Accordion defaultActiveKey="0" flush>
                    {data.cities !== undefined
                        ? Object.keys(data.cities).map((city, index) => {
                            return (
                                <Accordion.Item
                                    id="accordion-item"
                                    eventKey={index}
                                    key={index}
                                >
                                    <Accordion.Header id="accordion-header">
                                        {city}
                                    </Accordion.Header>
                                    <AccordionBody id="accordion-body">
                                        {data !== undefined
                                            ? data.cities[city].map((element, index) => (
                                                <LocationCard
                                                    location={element}
                                                    key={index}
                                                    length={data.cities[city].length}
                                                />
                                            ))
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
  background-color: white;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const LocationsContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  margin: 20px auto;
`;

const DesktopContainer = styled.div`
display: flex;
flex-direction: row;

`
const SliderShareIconsReleaseCardCont = styled.div`
width: 55%;
`