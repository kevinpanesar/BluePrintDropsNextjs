import React from "react";
import styled from "styled-components";
import { SneakerCard } from "../SneakerCard/SneakerCard";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { format, getDate } from "date-fns";

export const SneakerFeed = () => {
  const term = useSelector((state) => state.sneaker.searchTerm);

  let info = useSelector((state) => {
    if (state.sneaker.currentSneakerFeedUpcoming === true) {
      const months = Object.keys(state.sneaker.futureMonths);

      return months.map((element) => {
        return state.sneaker.futureSneakerInfoAgeOrGender[element].filter(
          (element) => {
            return element.title.toLowerCase().includes(term.toLowerCase());
          }
        );
      });
    } else {
      const months = Object.keys(state.sneaker.futureMonths);
      return months.map((element) => {
        return state.sneaker.pastSneakerInfoAgeOrGender[element].filter(
          (element) => {
            return element.title.toLowerCase().includes(term.toLowerCase());
          }
        );
      });
    }
  });

  const filter = useSelector(
    (state) => state.sneaker.mensWomensKidsFilterValue
  );

  let filteredResults;

  if (filter === "reset") {
    filteredResults = info;
  } else {
    filteredResults = info.map((element) => {
      return element.filter((element) => element[filter] === true);
    });
  }

  filteredResults.map((element) =>
    element.sort((firstEl, secondEl) => {
      return getDate(new Date(firstEl.date)) - getDate(new Date(secondEl.date));
    })
  );

  return (
    <Container>
      {filteredResults.map((element, index) => {
        if (element.length > 0) {
          return (
            <div key={index}>
              <Month>{format(new Date(element[0].date), "LLLL")}</Month>
              <CardContainer>
                {element !== undefined
                  ? element.map((element, index) => {
                      return (
                        <Link
                          passHref
                          key={element.title + element.colorway}
                          href={
                            "/ReleaseInfo/" + element.title + "KP" + element._id
                          }
                        >
                          <Links>
                            <SneakerCard cardInfo={element} />
                          </Links>
                        </Link>
                      );
                    })
                  : null}
              </CardContainer>
            </div>
          );
        }
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 70px;
  background-color: #f5f5f5;
  overflow: scroll;
  height: 600px;
`;

const CardContainer = styled.div`
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
  text-align: left;
  font-family: "Signika", sans-serif;
  margin-bottom: 20px;
  margin-left: 10px;
`;
