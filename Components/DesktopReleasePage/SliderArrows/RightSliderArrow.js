import React from "react";
import styled from "styled-components";

export const RightSliderArrow = ({ className, style, onClick, length, currentSlide }) => {
    return (<div>
        <RightArrow onClick={onClick} length={length} currentSlide={currentSlide} src="/Media/arrow-right-circle.svg" />
    </div>

    );
};

const RightArrow = styled.img`
position: absolute;
width: 30px;
z-index: 100;
top: 50%;
right: 15px;
display: ${props => {
        if (props.length == props.currentSlide) {
            return 'none'
        }
        else {
            return 'block'
        }
    }};
`
