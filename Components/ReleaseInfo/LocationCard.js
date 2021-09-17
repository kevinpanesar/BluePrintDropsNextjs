import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import Image from 'next/image'
import GoogleMaps from '../../public/Media/googlemaps.png'

export const LocationCard = ({ location }) => {

    // const locationData = useSelector((state) => {

    //     if (state.sneaker.currentSneakerInfo == undefined) {
    //         return state.sneaker.allSneakerInfo[0].locations;
    //     }

    //     return state.sneaker.currentSneakerInfo.cities;

    // })

    const address = `http://maps.google.com/?q=${location.Address}`


    return (
        <Container>
            <ImageTitleContainer>
                <ImageContainer>
                    <img src={location.img} width="60px" />
                </ImageContainer>
                <TitleSubtitleContainer>
                    <h5>{location.location}</h5>
                    <h6>{location.type}</h6>
                </TitleSubtitleContainer>

            </ImageTitleContainer>
            <p>{location.Description}</p>
            <a href={address}><GoogleMapsImg src={GoogleMaps} height="30px" width="30px" /></a>

        </Container>
    )

}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: #F5F5F5; 
margin-bottom: 10px;
p{
    padding: 10px;
}
border: 1px solid #B8B8B8;
border-radius: 10px;
`

const ImageTitleContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
font-family: 'Inter', sans-serif;
font-weight: 700;

`

const ImageContainer = styled.div`
border-radius: 10px;
overflow: hidden;
margin: 10px;
width: 60px;
height: 60px;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
`

const TitleSubtitleContainer = styled.div`
display: flex;
flex-direction: column;
font-weight: 700;
align-content: center;
`

const GoogleMapsImg = styled(Image)`
margin: 10px;
margin-bottom: 10px;
`
const TitleImgContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`