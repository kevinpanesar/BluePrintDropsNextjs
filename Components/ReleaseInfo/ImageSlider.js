import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useSelector } from "react-redux";

const handleDragStart = (e) => e.preventDefault();

export const ImageSlider = ({ data }) => {
  let items;

  if (data.images !== undefined) {
    items = data.images.map((element) => (
      <SlideImage src={element} onDragStart={handleDragStart} />
    ));
  }

  items.shift();
  return (
    <Container>
      <AliceCarousel
        disableButtonsControls="true"
        mouseTracking
        items={items}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 22px;
`;
