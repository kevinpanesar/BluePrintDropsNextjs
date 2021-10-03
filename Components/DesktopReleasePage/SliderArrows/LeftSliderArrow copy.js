import React from "react";
import styled from "styled-components";

export const LeftSliderArrow = ({ className, style, onClick, currentSlide }) => {
    return (
        <LeftArrow onClick={onClick} currentSlide={currentSlide} src="/Media/arrow-left-circle.svg" />
    );
};

const LeftArrow = styled.img`
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
