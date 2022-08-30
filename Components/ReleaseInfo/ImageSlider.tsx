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
  let items : JSX.Element[] = [];

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();

    console.log(data)
  
  if (data.images !== undefined) {
    console.log(data)
    items = data.images.map((element, index) => (
      <SlideImage src={element} onDragStart={handleDragStart} key={index} />
    ));

  }

  console.log(items)
  items.shift();
  console.log(items)
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
