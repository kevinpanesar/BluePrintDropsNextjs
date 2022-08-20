import React from "react";
import styled from "styled-components";

interface RightSliderArrowProps {
  length: number;
  currentSlide: number;
}

export const RightSliderArrow = ({
  length,
  currentSlide,
}: RightSliderArrowProps) => {
  return (
    <div>
      <RightArrow
        length={length}
        currentSlide={currentSlide}
        src="/Media/arrow-right-circle.svg"
      />
    </div>
  );
};

const RightArrow = styled.img<{ length: number; currentSlide: number }>`
  position: absolute;
  width: 30px;
  z-index: 100;
  top: 50%;
  right: 15px;
  display: ${(props) => {
    if (props.length == props.currentSlide) {
      return "none";
    } else {
      return "block";
    }
  }};
`;
