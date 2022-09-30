import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Header = ({ type } : {type: string}) => {
  return (
    <HeaderContainer type={type}>
      <Link href={"/"}>
        <h1>BluePrint</h1>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ type: string }>`
  height: 40px;
  width: 75%;
  color: #7d00ff; ;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
  color: ${(props) => (props.type === "desktop" ? "white" : "black")};

  h1{
    font-size: 24px;
    color: #000000;
  }
`;
