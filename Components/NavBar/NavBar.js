import React from "react";
import styled from "styled-components";
import Home from "../../public/Media/home.svg";
import Tools from "../../public/Media/sliders.svg";
import Recent from "../../public/Media/rotate-ccw.svg";
import User from "../../public/Media/user.svg";
// import { useHistory } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <NavContainer>
      <IconContainer>
        {/* <Link href={"/"} >
          <Image src={Home} width={24} height={24} />
        </Link>
        <Image src={Recent} width={24} height={24} />
        <Image src={Tools} width={24} height={24} />
        <Link href={"/about"}>
          <Image src={User} width={24} height={24} />
        </Link> */}
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
