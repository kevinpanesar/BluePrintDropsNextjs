import React from "react";
import styled from "styled-components";
import { SneakerCard } from "../SneakerCard/SneakerCard";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import Link from "next/link";

export const SneakerFeed = () => {
  const term = useSelector((state) => state.sneaker.searchTerm);
  const info = useSelector((state) => {
    if (state.sneaker.currentSneakerFeedUpcoming === true) {
      return state.sneaker.futureSneakerInfoAgeOrGender.filter((element) =>
        element.title.toLowerCase().includes(term.toLowerCase())
      );
    } else {
      return state.sneaker.pastSneakerInfoAgeOrGender.filter((element) =>
        element.title.toLowerCase().includes(term.toLowerCase())
      );
    }
  });
  const dispatch = useDispatch();

  return (
    <Container>
  
      <CardContainer>
        {info !== undefined
          ? info.map((element, index) => {
              return (
                <Link
                  passHref
                  key={element.title + element.colorway}
                  href={"/ReleaseInfo/" + element.title + "_" + element._id}
                >
                  <Links>
                    <SneakerCard cardInfo={element} />
                  </Links>
                </Link>
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

const Links = styled.a`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-decoration: none;
`;

const Month = styled.h2`
  width: 100%;
  text-align: left;
  font-family: "Signika", sans-serif;
  margin-bottom: 20px;
`;
