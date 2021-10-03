import {React, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { LeftSliderArrow } from "./SliderArrows/LeftSliderArrow copy";
import { RightSliderArrow } from "./SliderArrows/RightSliderArrow";


export const DesktopSlider = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState();
    console.log(currentSlide);
    let items;

    if (data.images !== undefined) {
        items = data.images.map((element, index) => (
            <div key={index}>
                <SlideImage src={element} />
            </div>

        ));
    }

    items.shift();

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        nextArrow: <RightSliderArrow length={data.images.length - 2} currentSlide={currentSlide}/>,
        prevArrow: <LeftSliderArrow currentSlide={currentSlide}/>,
        
    };

    return (
        <Container>
            <Slider {...settings}>
                {items}
            </Slider>
        </Container>

    );
};

const Container = styled.div`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
  border: 2px solid #C0C0C0;
  border-radius: 10px;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  padding: 10px;
`;
