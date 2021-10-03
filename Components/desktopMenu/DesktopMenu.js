import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const DesktopMenu = () => {
    return (
        <StyledMenu>
            <Link id="navText" href={"/"}>
                <NavPages>Home</NavPages>
            </Link>
            <Link href={"/clothing-releases"}>
                <NavPages>Clothing</NavPages>
            </Link>
            <Link href={"/clothing-releases"}>
                <NavPages>Tools</NavPages>
            </Link>
            <Link href={"/about"}>
                <NavPages>About</NavPages>
            </Link>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

display: flex;
flex-direction: row;
justify-content: space-between;
width: 30%;

  @media (max-width: 768px) {
      display: none;
  }

 
`

const NavPages = styled.a`
color: black;
text-decoration: none;
font-weight: 600;
font-size: 16px;
font-family: 'Inter', sans-serif;
`