import { React, useEffect, useRef } from "react";

export const Splide = () => {
  let primaryRef = useRef();
  let secondaryRef = useRef();

  // useEffect(() => {
  //   // Set the sync target right after the component is mounted.
  //   primaryRef.current.sync(secondaryRef.current.splide);
  // });

  const primaryOptions = {
    type: "loop",
    width: 800,
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    pagination: false,
  };

  const secondaryOptions = {
    type: "slide",
    rewind: true,
    width: 800,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    updateOnMove: true,
  };

  return (
    <div>
      <Splide options={primaryOptions} ref={primaryRef}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Splide>

      <Splide options={secondaryOptions} ref={secondaryRef}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Splide>
    </div>
  );
};
