import React from 'react';
import styled from 'styled-components'
import SizeChart from '../../Media/sizechartimage.png'


export const ToolsPage = () =>{
return(<Container>
    <Title>
        Tools
    </Title>
    <ChartTitle>Mens &harr; Womens Shoe Size Conversion</ChartTitle>
    <ChartImg src={SizeChart} />

</Container>)

}

const Container = styled.div`
width: 100%;
margin-bottom: 80px;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.p`
font-size: 30px;
text-align: center;
margin-top: 10px;
`

const ChartImg = styled.img<{ src: any }>`
width: 60%;
`

const ChartTitle = styled.p`
font-size: 20px;
`