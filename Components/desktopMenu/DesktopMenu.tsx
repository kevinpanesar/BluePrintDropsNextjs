import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const DesktopMenu = ({type} : any) => {
  return (
    <StyledMenu >
      <Link href={"/"}>
        <NavPages type={type}>Sneaker Releases</NavPages>
      </Link>
      <Link href={"/clothing-releases"}>
        <NavPages type={type}>Clothing Releases</NavPages>
      </Link>
      {/* <Link href={"/clothing-releases"}>
        <NavPages type={type}>Tools</NavPages>
      </Link>
      <Link href={"/about"}>
        <NavPages type={type}>About Us</NavPages>
      </Link> */}
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
    
  }
   
     @media (min-width: 768px) and (max-width: 1024px)  {
    width: 67%;
    }

    @media (min-width: 1024px){
    width: 70%;
    }

`;

const NavPages = styled.a`
  color: ${props => props.type === 'desktop' ? 'white' : 'black'};
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  line-height: 19px;
  cursor: pointer;
  :hover{
    color: #4c4b4b;
    border-bottom: solid 2px #4c4b4b;
  }

   @media (min-width: 768px) and (max-width: 1024px){
    font-size: 13px;
   }

      @media (min-width: 1024px) and (max-width: 1440px){
    font-size: 14px;
   }
`;
