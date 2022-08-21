import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useSelector } from "react-redux";

interface ImageSliderProps {
  data: {
    images: string[];
  };
}

export const ImageSlider = ({ data }: ImageSliderProps) => {
  let items = [{}];

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();

  if (data.images !== undefined) {
    items = data.images.map((element) => (
      <SlideImage src={element} onDragStart={handleDragStart} />
    ));
  }

  items.shift();
  return (
    <Container>
      <AliceCarousel
        disableButtonsControls={true}
        mouseTracking
        items={items}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  overflow: hidden;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 22px;
`;
