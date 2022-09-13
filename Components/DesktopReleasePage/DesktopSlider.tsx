import React, { useEffect, useRef } from "react";
import { MutableRefObject } from "react";
import styled from "styled-components";
const { Splide, SplideSlide } = require("splide-nextjs/react-splide");

interface PropTypes{
  data: {
    title: string;
    date: string;
    _id: string;
    colorway: string;
    price: number;
    mensFlag: boolean;
    womensFlag: boolean;
    kidsFlag: boolean;
    cities: {[key: string]: {location: string, type: string, Description: string, img: string, date: string, Address: string}[]};
    images: string[];
    OnlineLinks: {
      CanadianLinks: {title: string, type: string, img: string, link: string}[];
      USALinks: {title: string, type: string, img: string, link: string}[];
      InternationalLinks: {title: string, type: string, img: string, link: string}[];
    };
  };
  }

export const ThumbnailSlider = ({ data }: PropTypes) => {
  const primaryRef = useRef< typeof SplideSlide>();
  const secondaryRef = useRef< typeof SplideSlide>();
  let items;

  useEffect(() => {
    primaryRef.current.sync(secondaryRef.current.splide);
  });

  if (data.images !== undefined) {
    items = data.images?.map((element, index) => (
      <SplideSlide key={index}>
        <SlideImage src={element} />
      </SplideSlide>
    ));
  }

  items?.shift();

  const primaryOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
  };

  const secondaryOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    isNavigation: true,
    updateOnMove: true,
    focus: "center",
  };

  return (
    <Container>
      <Splide options={primaryOptions} ref={primaryRef} className="testing">
        {items}
      </Splide>

      <Splide
        options={secondaryOptions}
        ref={secondaryRef}
        className="navSlider"
      >
        {items}
      </Splide>
    </Container>
  );
};

const SlideImage = styled.img`
  object-fit: contain;
  height: 100%;
  height: 558px;
  width: 100%;
  max-height: 55vh;
  max-width: 100vh;
  padding: 20px 20px 0px 20px;
`;

const Container = styled.div`
  /* width: 90%; */
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
