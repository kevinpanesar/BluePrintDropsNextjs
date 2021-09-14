import React from "react";
import styled from "styled-components";
import Home from "../../public/Media/home.svg";
import Tools from "../../public/Media/sliders.svg";
import Recent from "../../public/Media/rotate-ccw.svg";
import User from "../../public/Media/user.svg";
// import { useHistory } from "react-router-dom";
import Image from "next/image";

export const NavBar = () => {
  // const history = useHistory();

  const handleReleaseInfoClick = () => {
    // history.push("/releaseInfo");
  };

  const handleToolsClick = () => {
    // history.push("/tools");
  };

  const handleAboutClick = () => {
    // history.push("/about");
  };

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <NavContainer>
      <IconContainer>
        <StyledImage src={Home} onClick={handleHomeClick} />
        <StyledImage src={Recent} onClick={handleToolsClick} />
        <StyledImage src={Tools} onClick={handleReleaseInfoClick} />
        <StyledImage src={User} onClick={handleAboutClick} />
      </IconContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
`;

const IconContainer = styled.div`
  background: #ffffff;
  border-radius: 30px;
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledImage = styled(Image)`
  width: 24px;
`;
