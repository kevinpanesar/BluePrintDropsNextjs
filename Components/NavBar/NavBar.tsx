import React from "react";
import styled from "styled-components";
import Home from "../../public/Media/home.svg";
import Tools from "../../public/Media/sliders.svg";
import Recent from "../../public/Media/rotate-ccw.svg";
import User from "../../public/Media/user.svg";
// import { useHistory } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
  data: {
    title: string;
    _id: string;
  };
}

export const NavBar = ({ data }: NavBarProps) => {
  return (
    <NavContainer>
      <Link href={"/RaffleGenerator/" + data.title + "_" + data._id}>
        <GenerateRafflesButton>Generate Raffles</GenerateRafflesButton>
      </Link>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f1f0f057;
  box-shadow: 7px 7px 7px 4px rgba(0, 0, 0, 0.25);
  /* background-image: linear-gradient(
    rgba(245, 245, 245, 0),
    rgba(245, 245, 245, 0.3),
    rgba(245, 245, 245, 1),
    #f1f0f057
  ); */
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
`;

const IconContainer = styled.button`
  background: #ffffff;
  border-radius: 30px;
  width: 90%;
  height: 50px;
`;

const GenerateRafflesButton = styled.button`
  background-color: #7d00ff;
  width: 90%;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  color: white;
  border: 2px solid #7d00ff;

  :hover {
    background-color: #305773;
  }
`;
