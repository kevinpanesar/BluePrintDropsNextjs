import React from 'react';
import styled from 'styled-components'
import Logo from '../../public/Media/logo.png';
import Image from "next/image";

export const AboutMePage = () => {
return(<Container>
    <h1>About Us</h1>
    <ImageDiv>
        <Image src={Logo} />
    </ImageDiv>
    <h2>Our Mission</h2>
    <AboutUs>
        Providing you all anticipated sneaker and clothing release information in the metro vancouver area.
    </AboutUs>
    <h2>Our Story</h2>
    <AboutUs>
        We are two young guys that have a passion for collecting sneakers and collecting grailed items. We have many times struck out on sneaker drops, wether it be from  raffle draws or missing out on entering raffles due to the lack of information about rleeases in our area. Thats when we decided on creating a platform for all people like us that are interested in staying alert on when and where they can cop the latest hyped sneaker, clothes or merch drops.
    </AboutUs>
</Container>)
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: left;
font-family: 'Inter', sans-serif;
justify-content: space-evenly;
margin-bottom: 80px;

h1{
    margin: 15px;
}

h2{
    margin: 12px;
}
`

const ImageDiv = styled.div`
    width: 85%;
    height: 270px;
    background-image: url("https://media.istockphoto.com/photos/moonrise-above-downtown-vancouver-picture-id1131455897?k=6&m=1131455897&s=612x612&w=0&h=rloje4jYWWHdoIWyOlhwSLevG-hDsm4Gd5dD2rxcBMY=");
    border-radius: 10px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
`
const AboutUs = styled.p`
width: 80%;
`