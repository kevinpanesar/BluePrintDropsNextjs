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

const AccordionBody = dynamic(import("react-bootstrap/esm/AccordionBody"), {
  ssr: false,
});

export const ReleaseInfoPage = ({ data }) => {
  // const history = useHistory();
  // const handleClick = (e) => {
  //     e.preventDefault();
  //     history.push("/");

  // }

  // const handleRaffleClick = (e) => {
  //   e.preventDefault();
  //   history.push("/raffle-generator");
  // };

  // const locationData = useSelector((state) => {
  //   if (state.sneaker.currentSneakerInfo == undefined) {
  //     return state.sneaker.allSneakerInfo[0].cities;
  //   }
  //   return state.sneaker.currentSneakerInfo.cities;
  // });

  return (
    <Container>
      <Button>Back</Button>
      <ImageSlider data={data} />
      <ShareIcons />
      <ReleaseCard data={data} />

      <LocationsContainer>
        <Accordion defaultActiveKey="0" flush>
          {data.cities !== undefined
            ? Object.keys(data.cities).map((element, index) => {
                return (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{element}</Accordion.Header>
                    <AccordionBody>
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
      <Link href={"/RaffleGenerator/" + data.title + "_" + data._id}>
        <GenerateRafflesButton>Generate Raffles</GenerateRafflesButton>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const LocationsContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  margin: 20px auto;
`;
const Button = styled.button`
  background-color: #21587f;
  width: 120px;
  margin: 20px;
  border-radius: 8px;
  color: white;
  border: 2px solid #21587f;
  padding: 5px 0px;

  :hover {
    background-color: #305773;
  }
`;
const GenerateRafflesButton = styled.button`
  background-color: #21587f;
  width: 90%;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  color: white;
  border: 2px solid #21587f;

  :hover {
    background-color: #305773;
  }
`;
