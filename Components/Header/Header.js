import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <h1>BluePrint</h1>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 40px;
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin: 10px;
`;
