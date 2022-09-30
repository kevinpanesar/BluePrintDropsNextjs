import React from "react";
import styled from "styled-components";
import { SneakerCard } from "../SneakerCard/SneakerCard";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { format, getDate } from "date-fns";
import Spinner from "react-bootstrap/Spinner";

interface SneakerFeed {
  filteredResults: any;
  type: string;
}

export const SneakerFeed = ({ filteredResults, type }: SneakerFeed) => {
  return (
    <Container type={type}>
      {type !== "for-sale"
        ? filteredResults?.map((element: any, index: number) => {
            if (element.length > 0) {
              return (
                <div key={index}>
                  {type !== "for-sale" && (
                    <Month>
                      {format(
                        new Date(element[0]?.date.replace(/, /g, "/")),
                        "LLLL"
                      )}
                    </Month>
                  )}
                  <CardContainer>
                    {element?.map(
                      (element: {
                        title: string;
                        colorway: string;
                        _id: string;
                        date: string;
                        images: string[];
                        price: number;
                        image: string[];
                        qty: number;
                      }) => {
                        return (
                          <Link
                            passHref
                            key={element.title + element.colorway}
                            href={
                              "/ReleaseInfo/" +
                              element.title +
                              "KP" +
                              element._id
                            }
                          >
                            <Links>
                              <SneakerCard
                                cardInfo={element}
                                type="home-page"
                              />
                            </Links>
                          </Link>
                        );
                      }
                    )}
                  </CardContainer>
                </div>
              );
            }
          })
        : filteredResults?.map(
            (
              element: {
                title: string;
                colorway: string;
                _id: string;
                date: string;
                images: string[];
                price: number;
                image: string[];
                qty: number;
              },
              index: number
            ) => {
              if (element.title) {
                return (
                  <Link
                    passHref
                    key={index}
                    href={"/ForSale/" + element.title + "KP" + element._id}
                  >
                    <Links>
                      <SneakerCard cardInfo={element} type={type} />
                    </Links>
                  </Link>
                );
              }
            }
          )}
    </Container>
  );
};

const Container = styled.div<{ type: string }>`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
  justify-content: ${(props) =>
    props.type == "for-sale" ? "flex-start" : "space-between"};
  flex-direction: ${(props) => (props.type == "for-sale" ? "row" : "column")};
  margin-bottom: 70px;
  background-color: #f1f0f057;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  flex-wrap: wrap;
  height: 600px;
  height: 100%;

  @media (min-width: 768px) {
    margin: 0 auto;
    background-color: white;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80%;
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
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 24px;

  @media (min-width: 769px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin: 25px 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 28px;
  }

  @media (min-width: 1440px) and (max-width: 1900px) {
    font-size: 30px;
  }

  @media (min-width: 1900px) {
    font-size: 32px;
  }
`;
