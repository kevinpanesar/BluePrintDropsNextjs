import { React } from 'react';
import styled from 'styled-components';
import { ImageSlider } from './ImageSlider';
import { LocationInfo } from './LocationInfo';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import { ReleaseCard } from './ReleaseCard';
import { LocationCard } from './LocationCard';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


export const ReleaseInfoPage = ({ data }) => {


    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        history.push("/");

    }

    const handleRaffleClick = (e) => {
        e.preventDefault();
        history.push("/raffle-generator");

    }

    const locationData = useSelector((state) => {

        if (state.sneaker.currentSneakerInfo == undefined) {
            return state.sneaker.allSneakerInfo[0].cities;
        }
        return state.sneaker.currentSneakerInfo.cities;

    })



    return (<Container>
        <Button onClick={handleClick}>Back</Button>{' '}
        <ImageSlider />
        <ReleaseCard />
        <LocationsContainer>
            <Accordion defaultActiveKey="0" flush>
                {locationData !== undefined ? Object.keys(locationData).map((element, index) => {
                    return (<Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{element}</Accordion.Header>
                        <AccordionBody>
                            {locationData !== undefined ? locationData[element].map((element, index) => <LocationCard location={element} key={index} />) : null}
                        </AccordionBody>
                    </Accordion.Item>)
                }) : null}
            </Accordion>

        </LocationsContainer>
        <GenerateRafflesButton onClick={handleRaffleClick}>Generate Raffles</GenerateRafflesButton>
    </Container>)


}

const Container = styled.div`
    width: 100%;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    
`



const LocationsTitle = styled.p`
text-align: left;
font-family: 'Roboto Condensed', sans-serif;
font-size: 35px;
`

const LocationsContainer = styled.div`
width: 90%;
margin-top: 30px;
margin: 20px auto;
`
const Button = styled.button`
	background-color: #21587F;
	width: 120px;
	margin: 20px;
  border-radius: 8px;
  color: white;
  border: 2px solid #21587F;;
  padding: 5px 0px;

  :hover{
    background-color: #305773;
  }
`
const GenerateRafflesButton = styled.button`
	background-color: #21587F;
	width: 90%;
    margin: 0 auto;
    padding-top: 8px;
    padding-bottom: 8px;
  border-radius: 8px;
  color: white;
  border: 2px solid #21587F;;

  :hover{
    background-color: #305773;
  }
`
