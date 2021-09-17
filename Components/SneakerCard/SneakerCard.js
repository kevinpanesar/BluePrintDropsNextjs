import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

export const SneakerCard = ({ cardInfo, switchShoe }) => {

    return (
        <Container onClick={switchShoe}>
            <ReleaseDateContainer>
                <DateText>
                    {cardInfo.releaseDate}
                </DateText>
            </ReleaseDateContainer>
            <ReleasePriceContainer>
                <ImgContainer>
                <SneakerImg src={cardInfo.images[0]} height={250} width={375}/>
                </ImgContainer>
                <SubContainer>
                    <ReleaseText>Price</ReleaseText>
                    <ReleaseText>{cardInfo.price}</ReleaseText>
                </SubContainer>
                <SubContainer2>
                    <ReleaseText>{cardInfo.title}</ReleaseText>
                    <ReleaseSubText>{cardInfo.colorway}</ReleaseSubText>
                </SubContainer2>
                <SubContainer></SubContainer>
            </ReleasePriceContainer>
        </Container>

    )
}

const Container = styled.div`
    width: 90%;
    height: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`


const ReleasePriceContainer = styled.div`
    width: 90%;
    height: 60%;
    background: #FFFFFF;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ReleaseDateContainer = styled.div`
    width: 100%;
    height: 25%;
    background: #FFFFFF;
`
const ReleaseText = styled.p`
font-family: 'Roboto Condensed', sans-serif;
font-size: 10px;
letter-spacing: 1.2px;
text-transform: uppercase;
color: #000000;
margin-bottom: 5px;
`

const DateText = styled.p`
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700;
font-size: 90px;
text-align: right;
letter-spacing: -5px;
color: #F5F5F5;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
position: relative;
left: 6px;
bottom: 26px;
line-height: 1;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #FFFFFF;
    width: 100%;
    margin-bottom: 5px;
    line-height: 1;
`
const SubContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    width: 100%;
    margin-bottom: 10px;
    line-height: 1;
`

const SneakerImg = styled(Image)`
    margin-bottom: 5px;
    margin-bottom: 5px;
`

const ReleaseSubText = styled.p`
font-family: 'Roboto Condensed', sans-serif;
font-size: 8px;
letter-spacing: 1.2px;
text-transform: uppercase;
color: #000000;
margin-bottom: 5px;
`

const ImgContainer = styled.div`
width: 90%;
height: 92px;
`