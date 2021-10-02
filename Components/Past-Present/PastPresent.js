import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export const PastPresent = ({sneaker, clothing}) => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state) => {
    if (sneaker) {
      return state.sneaker.upcomingSelected;
    } else if (clothing) {
      return state.clothing.upcomingSelected;
    }
  });

  const past = useSelector((state) => {
    if (sneaker) {
      return state.sneaker.pastSelected;
    } else if (clothing) {
      return state.clothing.pastSelected;
    }
  });

  const changeUpcomingColor = () => {
    if (clothing) {
      if (upcoming === true) {
        return null;
      } else {
        dispatch({ type: "clothing/toggleUpcomingSelected" });
        dispatch({ type: "clothing/togglePastSelected" });
        dispatch({ type: "clothing/toggleSneakerFeed" });
      }
    } else if (sneaker) {
      if (upcoming === true) {
        return null;
      } else {
        dispatch({ type: "sneaker/toggleUpcomingSelected" });
        dispatch({ type: "sneaker/togglePastSelected" });
        dispatch({ type: "sneaker/toggleSneakerFeed" });
      }
    }
  };

  const changePastColor = () => {
    if (sneaker) {
      if (past === true) {
        return null;
      } else {
        dispatch({ type: "sneaker/toggleUpcomingSelected" });
        dispatch({ type: "sneaker/togglePastSelected" });
        dispatch({ type: "sneaker/toggleSneakerFeed" });
      }
    } else if (clothing) {
      if (past === true) {
        return null;
      } else {
        dispatch({ type: "clothing/toggleUpcomingSelected" });
        dispatch({ type: "clothing/togglePastSelected" });
        dispatch({ type: "clothing/toggleSneakerFeed" });
      }
    }
  };

  return (
    <Container>
      <UpcomingContainer selected={upcoming} onClick={changeUpcomingColor}>
        <Text selected={upcoming}>Upcoming</Text>
      </UpcomingContainer>
      <PastContainer selected={past} onClick={changePastColor}>
        <Text selected={past}>Past</Text>
      </PastContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
 
  @media only screen and (max-width: 375px) {
    height: 40px;
    margin-top: 10px;
  }
`;

const Text = styled.h2`
  color: ${(props) => (props.selected === true ? "white" : "black")};
  padding: 10px;
  font-family: "Signika", sans-serif;
  font-size: 18px;
  margin-bottom: 0rem;

  @media only screen and (max-width: 375px) {
    font-size: 14px;

  }
`;

const UpcomingContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: ${(props) => (props.selected === true ? "#21587F" : null)};
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.selected
      ? "inset 0.640128px 0.640128px 7.68154px 6.40128px rgba(0, 0, 0, 0.25)"
      : null};
`;

const PastContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  background-color: ${(props) => (props.selected === true ? "#21587F" : null)};
  box-shadow: ${(props) =>
    props.selected
      ? "inset 0.640128px 0.640128px 7.68154px 6.40128px rgba(0, 0, 0, 0.25)"
      : null};
`;
