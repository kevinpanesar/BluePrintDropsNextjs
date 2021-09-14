import React from "react";
import styled from "styled-components";
import { SneakerCard } from "../SneakerCard/SneakerCard";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

export const SneakerFeed = ({ info }) => {
  // const term = useSelector((state)=>state.sneaker.searchTerm);
  // const info = useSelector((state) => {

  //     if (state.sneaker.currentSneakerFeedUpcoming === true){
  //         return state.sneaker.futureSneakerInfoAgeOrGender.filter((element) => element.title.toLowerCase().includes(term.toLowerCase()));
  //     }
  //     else{
  //         return state.sneaker.pastSneakerInfoAgeOrGender.filter((element) => element.title.toLowerCase().includes(term.toLowerCase()));
  //     }

  // });
  // const dispatch = useDispatch()
  // const history = useHistory();

  return (
    <Container>
      <CardContainer>
        {info !== undefined
          ? info.map((element, index) => {
              return (
                <SneakerCard
                  cardInfo={element}
                  switchShoe={() => {
                    history.push("/releaseInfo");
                    dispatch({
                      type: "sneaker/sneakerInfo",
                      payload: element,
                    });
                  }}
                  key={index}
                />
              );
            })
          : null}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  background-color: #f5f5f5;
`;

const CardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Month = styled.h2`
  width: 100%;
  text-align: left;
  font-family: "Signika", sans-serif;
  margin-bottom: 20px;
`;
