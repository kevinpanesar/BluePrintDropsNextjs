import React from "react";
import styled from "styled-components";
import { SneakerCard } from "../SneakerCard/SneakerCard";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { format, getDate } from "date-fns";

export const SneakerFeed = ({ filteredResults }) => {
  return (
    <Container>
      {filteredResults.map((element, index) => {
        if (element.length > 0) {
          return (
            <div key={index}>
              <Month>
                {format(new Date(element[0].date.replace(/, /g, "/")), "LLLL")}
              </Month>
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
  
      @media (min-width: 769px) {
    width: 75%;
    margin: 0 auto;
    height: 100%;
    overflow: visible;
    background-color: white;
  }
  
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Links = styled.a`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-decoration: none;
  

    @media (min-width: 450px) and (max-width: 768px) {
    width: 33%;
  }

      @media (min-width: 769px) {
    width: 25%;
  }
`;

const Month = styled.p`
  text-align: left;
  font-family: "Signika", sans-serif;
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 24px;
  
  @media (min-width: 769px) {
    font-size: 20px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
  }
  
`;
