import Head from "next/head";
import styled from "styled-components";
import { Header } from "../Components/Header/Header";
import { PastPresent } from "../Components/Past-Present/PastPresent";
import { SneakerFeed } from "../Components/SneakerFeed/SneakerFeed";
import { Options } from "../Components/mensWomensKidsSelector/mensWomensKidsSelector";
import { SearchBar } from "../Components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSneakerInfo } from "../store/releaseInfo";
import SideNavBar from "../Components/sideMenu/SideNavBar";
import { useAppDispatch } from "../store/store";
import Menu from "../Components/sideMenu/Menu";
import { RootState } from "../store/store";
import { getDate } from "date-fns";
import { useState } from "react";
import { Footer } from "../Components/Footer/Footer";
import { DesktopMenu } from "../Components/desktopMenu/DesktopMenu";
import { monthsObj } from "../util/monthSeperator";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/clientApp";

export default function Home() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const callBackend = useSelector((state: RootState) => {
    if (state.sneaker.allSneakerInfo.length == 0) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (callBackend) {
      dispatch(fetchSneakerInfo())
        .then(() => dispatch({ type: "sneaker/splitSneakerInfo" }))
        .then(() => dispatch({ type: "sneaker/filterMonths" }))
        .then(() => dispatch({ type: "sneaker/copyMonthsArray" }));
    }
  }, []);

  const term = useSelector((state: RootState) => state.sneaker.searchTerm);

  const info = useSelector((state: RootState) => {
    if (state.sneaker.currentSneakerFeedUpcoming === true) {
      const months = Object.keys(state.sneaker.futureMonths);

      return months?.map((element) => {
        return state.sneaker.futureSneakerInfoAgeOrGender[
          element as keyof typeof monthsObj
        ].filter((element: {title : string}) => {
          return element.title?.toLowerCase().includes(term.toLowerCase());
        });
      });
    } else {
      const months = Object.keys(state.sneaker.futureMonths);
      return months?.map((element) => {
        return state.sneaker.pastSneakerInfoAgeOrGender[
          element as keyof typeof monthsObj
        ].filter((element: {title: string}) => {
          return element?.title?.toLowerCase()?.includes(term?.toLowerCase());
        });
      });
    }
  });

  const filter = useSelector(
    (state: RootState) => state.sneaker.mensWomensKidsFilterValue
  );

  let filteredResults;

  if (filter === "reset") {
    filteredResults = info;
  } else {
    filteredResults = info?.map((element: RootState) => {
      return element.filter((element: any) => element[filter] === true);
    });
  }

  filteredResults?.map((element) =>
    element.sort((firstEl: { date: string }, secondEl: { date: string }) => {
      return (
        getDate(new Date(firstEl.date.replace(/, /g, "/"))) -
        getDate(new Date(secondEl.date.replace(/, /g, "/")))
      );
    })
  );

  return (
    <Container>
      <Head>
        <title>Sneaker Releases</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?Akronim&family=Open+Sans:ital,wght@0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <DesktopContentContainer>
        <HeaderContainer>
          <Header type={""} />
          <DesktopMenu />
          <SearchNavContainer>
            <SearchBar sneaker={true} clothing={false} />
            <NavContainer>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </NavContainer>
          </SearchNavContainer>
        </HeaderContainer>

        <PastPresent sneaker={true} clothing={false} />
        <Options sneaker={true} clothing={false} />
        <SneakerFeed filteredResults={filteredResults} type={""} />
        <Footer />
      </DesktopContentContainer>
    </Container>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 30;

  @media (min-width: 768px) {
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    padding: 20px;
    background-color: white;
    position: fixed;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    width: 80%;
    padding: 10px 20px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 29px;
    width: 80%;
    padding: 10px 20px;
  }

  @media (min-width: 1441px) {
    font-size: 29px;
    width: 70%;
    padding: 10px 20px;
  }

  @media (min-width: 1900px) and (max-width: 2500px) {
    width: 60%;
  }

  @media (min-width: 2500px) {
    width: 55%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  overflow: hidden;
`;

const SearchNavContainer = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DesktopContentContainer = styled.div`
  @media (min-width: 768px) {
    background-color: white;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80%;
  }

  @media (min-width: 1441px) and (max-width: 1900px) {
    width: 70%;
  }

  @media (min-width: 1900px) and (max-width: 2500px) {
    width: 60%;
  }

  @media (min-width: 2500px) {
    width: 55%;
  }
`;
