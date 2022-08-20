import React from "react";
import styled from "styled-components";

interface LeftSliderArrowProps{
    onClick: React.MouseEvent<HTMLElement>,
    currentSlide: number
}

export const LeftSliderArrow = ({ onClick, currentSlide } : LeftSliderArrowProps) => {
    return (
        <LeftArrow currentSlide={currentSlide} src="/Media/arrow-left-circle.svg" />
    );
};

const LeftArrow = styled.img<{ currentSlide: number }>`
position: absolute;
width: 30px;
z-index: 100;
top: 50%;
left: 15px;
display: ${props => {
        if (props.currentSlide === 0) {
            return 'none'
        }
        else {
            return 'block'
        }
    }};
`
