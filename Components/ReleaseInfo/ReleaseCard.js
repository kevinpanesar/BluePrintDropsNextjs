import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import {format} from 'date-fns';
import CardBackground from '../../Media/cardBackground.jpg';

export const ReleaseCard = ({ sneakerInfo}) =>{

    const locationData = useSelector((state) => {

        if (state.sneaker.currentSneakerInfo == undefined) {
            return state.sneaker.allSneakerInfo[0];
        }

        return state.sneaker.currentSneakerInfo

    })

    console.log(Date.today);


    return(
        <Container>
            <TitleContainer>
                <div>{locationData.title}<span> '{locationData.colorway}'</span></div>
            </TitleContainer>
            <PriceDateContainer>
                <Labels>
                    <p>PRICE:</p>
                    <p>RELEASE DATE:</p>
                </Labels>
                <Values>
                    <p>{locationData.price}</p>
                    <p>{format(new Date(locationData.date), 'PPP') }</p>
                </Values>
            </PriceDateContainer>
        </Container>
    )
}

const Container = styled.div`
width: 90%;
margin: 0 auto;
background-image: url("https://c4.wallpaperflare.com/wallpaper/355/376/62/blueprints-textures-2560x1600-abstract-textures-hd-art-wallpaper-preview.jpg");
border-radius: 22px;
color: white;
margin-top: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 700;
`
const TitleContainer = styled.div`
width: 90%;
height: 50%;
font-family: 'Inter', sans-serif;
font-weight: 700;
font-size: 24px;
letter-spacing: -0.02em;
line-height: 29px;
display: flex;
align-items: center;
margin-bottom: 10px;
padding-top: 9px;
`

const PriceDateContainer = styled.div`
width: 90%;
height: 50%;
display: flex;
flex-direction: row;
margin-bottom: 10px;
`
const Labels = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: flex-start;
    font-family: 'Inter';
    font-size: 15px;

    p{
        margin-bottom: 8px;
    }
`
const Values = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: flex-start;
    font-family: 'Inter';
    font-size: 15px;

    p{
        margin-bottom: 8px;
    }
`