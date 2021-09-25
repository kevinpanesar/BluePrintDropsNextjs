import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useSelector } from "react-redux";

const handleDragStart = (e) => e.preventDefault();

export const ImageSlider = ({ data }) => {
  // const Images = useSelector((state) =>{

  //     if (state.sneaker.currentSneakerInfo == undefined) {
  //         return state.sneaker.allSneakerInfo[0].images;
  //     }

  //     return state.sneaker.currentSneakerInfo.images})

  let items;

  if (data.images !== undefined) {
    items = data.images.map((element) => (
      <img
        width="100%"
        className="imageCarousel"
        src={element}
        onDragStart={handleDragStart}
      />
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
  border-radius: 22px;
  overflow: hidden;
  margin: 0 auto;
`;
