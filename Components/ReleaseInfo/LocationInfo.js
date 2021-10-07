import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const LocationInfo = ({ data }) => {
  return (
    <Container>
      <Location>{data.location} </Location>
      <Address>{data.address}</Address>
      <Type>{data.releaseType}</Type>
      <TimeDate>{data.raffleDate}</TimeDate>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: red;
`;

const Location = styled.p`
  text-align: left;
  font-size: 30px;
`;

const Address = styled.p`
  text-align: left;
  font-size: 22px;
`;

const Type = styled.p`
  text-align: left;
  font-size: 20px;
`;
const TimeDate = styled.p`
  text-align: left;
  font-size: 20px;
`;
