import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { set } from "date-fns";

interface OptionsProps {
  sneaker: boolean;
  clothing: boolean;
}

export const Options = ({ sneaker, clothing }: OptionsProps) => {
  const dispatch = useDispatch();
  const [allSelected, setAllSelected] = useState(true);
  const [mensSelected, setMensSelected] = useState(false);
  const [womensSelected, setWomensSelected] = useState(false);
  const [kidsSelected, setKidsSelected] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (sneaker) {
      dispatch({
        type: "sneaker/selectMensWomensKids",
        payload: event.target.value,
      });
    } else if (clothing) {
      dispatch({
        type: "clothing/selectMensWomensKids",
        payload: event.target.value,
      });
    }

    if (event.target.value === "reset") {
      setAllSelected(true);
      setMensSelected(false);
      setWomensSelected(false);
      setKidsSelected(false);
    } else if (event.target.value === "mensFlag") {
      setAllSelected(false);
      setMensSelected(true);
      setWomensSelected(false);
      setKidsSelected(false);
    } else if (event.target.value === "womensFlag") {
      setAllSelected(false);
      setMensSelected(false);
      setWomensSelected(true);
      setKidsSelected(false);
    } else if (event.target.value === "kidsFlag") {
      setAllSelected(false);
      setMensSelected(false);
      setWomensSelected(false);
      setKidsSelected(true);
    }
  };

  return (
    <Container clothing={clothing}>
      <Item onClick={handleChange} value="reset" selected={allSelected}>
        All
      </Item>
      <Item value="mensFlag" onClick={handleChange} selected={mensSelected}>
        Mens
      </Item>
      <Item onClick={handleChange} value="womensFlag" selected={womensSelected}>
        Womens
      </Item>
      <Item onClick={handleChange} value="kidsFlag" selected={kidsSelected}>
        Kids
      </Item>
    </Container>
  );
};

const Container = styled.div<{ clothing: boolean }>`
  width: 30%;
  height: 40px;
  margin: ${(props) =>
    props.clothing ? "100px auto 30px auto" : "20px auto 10px auto"};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 4px 0px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 375px) {
    height: 35px;
    font-size: 14px;
    margin: 15px auto 0 auto;
  }

  @media (max-width: 769px) {
    margin: ${(props) => (props.clothing ? "20px auto 30px auto" : null)};
    width: 84%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`;

const Item = styled.button<{ onClick: any; selected: boolean }>`
  width: 23%;
  background-color: ${(props) => (props.selected ? "#21587f" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border-radius: 10px;
  border: none;
  box-shadow: ${(props) =>
    props.selected
      ? "inset 0.640128px 0.640128px 7.68154px 6.40128px rgba(0, 0, 0, 0.25)"
      : null};
`;
