import { React, useState } from "react";
import styled from "styled-components";

export const MensWomensKidsIcons = ({ data }) => {
  const mensColor = "#4169E1";
  const womensColor = "#FF69B4";
  const kidsColor = "#32CD32";

  console.log(data);

  return (
    <Container>
      <Icon color={mensColor} flag={data.mensFlag}>
        M
      </Icon>
      <Icon color={womensColor} flag={data.womensFlag}>
        W
      </Icon>
      <Icon color={kidsColor} flag={data.kidsFlag}>
        K
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  display: ${(props) => {
    return props.flag === true ? "null" : "none";
  }};
  margin: 3px;
`;