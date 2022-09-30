import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

interface PastPresentProps {
  sneaker: boolean;
  clothing: boolean;
}

export const PastPresent = ({ sneaker, clothing }: PastPresentProps) => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state: RootState) => {
    if (sneaker) {
      return state.sneaker.upcomingSelected;
    } else if (clothing) {
      return state.clothing.upcomingSelected;
    }
  });

  const past = useSelector((state: RootState) => {
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
  margin: 20px auto;

  @media only screen and (max-width: 375px) {
    height: 40px;
    margin-top: 10px;
  }

  @media (min-width: 769px) {
    width: 30%;
    background-color: white;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 100px auto 0 auto;
    height: 40px;
    padding: 4px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin: 100px auto 0 auto;
    height: 40px;
    padding: 3px;
  }

  @media (min-width: 1440px) {
    margin: 100px auto 0 auto;
    height: 40px;
    padding: 3px;
  }
`;

const Text = styled.h2<{ selected: boolean | undefined }>`
  color: ${(props) => (props.selected === true ? "white" : "black")};
  padding: 10px;
  font-size: 18px;
  margin-bottom: 0rem;

  @media only screen and (max-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;

const UpcomingContainer = styled.div<{ selected: boolean | undefined }>`
  height: 100%;
  width: 50%;
  background-color: ${(props) => (props.selected === true ? "#7d00ff" : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  /* box-shadow: ${(props) =>
    props.selected
      ? "inset 0.640128px 0.640128px 7.68154px 6.40128px rgba(0, 0, 0, 0.25)"
      : null}; */
`;

const PastContainer = styled.div<{ selected: boolean | undefined }>`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => (props.selected === true ? "#7d00ff" : null)};
  /* box-shadow: ${(props) =>
    props.selected
      ? "inset 0.640128px 0.640128px 7.68154px 6.40128px rgba(0, 0, 0, 0.25)"
      : null}; */
`;
