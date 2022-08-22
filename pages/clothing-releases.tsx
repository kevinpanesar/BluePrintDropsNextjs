import Head from "next/head";
import styled from "styled-components";
import { Header } from "../Components/Header/Header";
import { PastPresent } from "../Components/Past-Present/PastPresent";
import { SneakerFeed } from "../Components/SneakerFeed/SneakerFeed";
import { Options } from "../Components/mensWomensKidsSelector/mensWomensKidsSelector";
import { SearchBar } from "../Components/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchClothingInfo } from "../store/ClothingReleaseInfo";
import SideNavBar from "../Components/sideMenu/SideNavBar";
import Menu from "../Components/sideMenu/Menu";
import { getDate } from "date-fns";
import { useState } from "react";
import { Footer } from "../Components/Footer/Footer";
import { DesktopMenu } from "../Components/desktopMenu/DesktopMenu";
import { RootState } from "../store/store";
import { monthsObj } from "../util/monthSeperator";
export default function Clothing() {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const callBackend = useSelector((state: RootState) => {
    if (state.sneaker.allSneakerInfo.length == 0) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (callBackend) {
      dispatch(fetchClothingInfo())
        .then(() => dispatch({ type: "clothing/splitClothingInfo" }))
        .then(() => dispatch({ type: "clothing/filterMonths" }))
        .then(() => dispatch({ type: "clothing/copyMonthsArray" }));
    }
  }, []);

  const term = useSelector((state: RootState) => state.clothing.searchTerm);

  let info = useSelector((state: RootState) => {
    if (state.clothing.currentClothingFeedUpcoming === true) {
      const months = Object.keys(state.clothing.futureMonths);

      return months.map((element: any) => {
        return state.clothing.futureClothingInfoAgeOrGender[
          element as keyof typeof monthsObj
        ].filter((element: any) => {
          return element.title?.toLowerCase().includes(term.toLowerCase());
        });
      });
    } else {
      const months = Object.keys(state.clothing.futureMonths);
      return months.map((element) => {
        return state.clothing.pastClothingInfoAgeOrGender[
          element as keyof typeof monthsObj
        ].filter((element: any) => {
          return element.title?.toLowerCase().includes(term.toLowerCase());
        });
      });
    }
  });

  const filter = useSelector(
    (state: RootState) => state.clothing.mensWomensKidsFilterValue
  );

  let filteredResults: any;

  if (filter === "reset") {
    filteredResults = info;
  } else {
    filteredResults = info.map((element) => {
      return element.filter((element: any) => element[filter] === true);
    });
  }

  filteredResults.map((element: string[]) =>
    element.sort((firstEl: any, secondEl: any) => {
      return (
        getDate(new Date(firstEl.date.replace(/, /g, "/"))) -
        getDate(new Date(secondEl.date.replace(/, /g, "/")))
      );
    })
  );

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <DesktopContentContainer>
        <HeaderContainer>
          <Header type={""} />
          <DesktopMenu />
          <SearchNavContainer>
            <SearchBar clothing={true} sneaker={false} />
            <div>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          </SearchNavContainer>
        </HeaderContainer>

        <PastPresent sneaker={false} clothing={true} />
        <Options sneaker={false} clothing={true} />
        <SneakerFeed filteredResults={filteredResults} />
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

const Container = styled.div`
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