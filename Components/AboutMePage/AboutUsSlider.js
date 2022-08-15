import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

export const AboutUsSlider = () => {
  let ArrayOfComponents = [
    <SlideImage src="/Media/about1.jpg" />,
    <SlideImage src="/Media/about2.jpg" />,
    <SlideImage src="/Media/about3.jpg" />,
    <SlideImage src="/Media/about4.jpg" />,
  ];

  return (
    <Container>
      <AliceCarousel
        autoPlay="true"
        disableButtonsControls="true"
        items={ArrayOfComponents}
        autoPlayInterval="4000"
        disableDotsControls="true"
        infinite="true"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  width: 100%;
`;
