import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>BluePrint</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-left: 10px;
  overflow: hidden;
`;
