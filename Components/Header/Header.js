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
  margin-left: 25px;
  padding-top: 20px;
  border-radius: 0px 0px 20px 20px;
`;
