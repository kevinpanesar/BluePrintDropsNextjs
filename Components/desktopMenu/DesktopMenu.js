import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const DesktopMenu = () => {
  return (
    <StyledMenu>
      <Link id="navText" href={"/"}>
        <NavPages>Sneaker Releases</NavPages>
      </Link>
      <Link href={"/clothing-releases"}>
        <NavPages>Clothing Releases</NavPages>
      </Link>
      <Link href={"/clothing-releases"}>
        <NavPages>Tools</NavPages>
      </Link>
      <Link href={"/about"}>
        <NavPages>About Us</NavPages>
      </Link>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavPages = styled.a`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.02em;
`;
