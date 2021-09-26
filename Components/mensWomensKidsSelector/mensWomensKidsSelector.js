import { React, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export const Options = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: "sneaker/selectMensWomensKids",
      payload: e.target.value,
    });
  };

  return (
    <Container>
      <Item onClick={handleChange} value="reset">
        All
      </Item>
      <Item value="mensFlag" onClick={handleChange}>
        Mens
      </Item>
      <Item onClick={handleChange} value="womensFlag">
        Womens
      </Item>
      <Item onClick={handleChange} value="kidsFlag">
        Kids
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 40px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 4px 0px;
  border: 2px solid black;
  background-color: white;
`;

const Item = styled.button`
  width: 23%;
  background-color: #21587f;
  color: white;
  border-radius: 10px;
`;
