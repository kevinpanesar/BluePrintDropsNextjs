import React from "react";
import styled from "styled-components";
import Home from "../../public/Media/home.svg";
import Tools from "../../public/Media/sliders.svg";
import Recent from "../../public/Media/rotate-ccw.svg";
import User from "../../public/Media/user.svg";
// import { useHistory } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

export const NavBar = ({ data }) => {
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
  height: 90px;

  background-image: linear-gradient(
    rgba(245, 245, 245, 0),
    rgba(245, 245, 245, 0.3),
    rgba(245, 245, 245, 1),
    #f5f5f5
  );
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
  background-color: #21587f;
  width: 90%;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: white;
  border: 2px solid #21587f;

  :hover {
    background-color: #305773;
  }
`;
