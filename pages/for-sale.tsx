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
import Modal from "react-modal";
import SideNavBar from "../Components/sideMenu/SideNavBar";
import Menu from "../Components/sideMenu/Menu";
import { getDate } from "date-fns";
import { useState } from "react";
import { Footer } from "../Components/Footer/Footer";
import { DesktopMenu } from "../Components/desktopMenu/DesktopMenu";
import { RootState } from "../store/store";
import { monthsObj } from "../util/monthSeperator";
import {
  removeItemsFromCart,
  fetchCart,
  updateInventory,
} from "../store/ClothingReleaseInfo";
import firebase from "../firebase/clientApp";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "firebase/auth";

Modal.setAppElement("#__next");

export default function Clothing() {
  const [open, setOpen] = useState(false);
  const [user]: AuthStateHook = useAuthState(
    firebase.auth() as unknown as Auth
  );
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.clothing.cart);
  const [modalIsOpen, setIsOpen] = useState(false);
  const callBackend = useSelector((state: RootState) => {
    if (state.clothing.allClothingInfo.length == 0) {
      return true;
    } else {
      return false;
    }
  });

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    console.log(clientSecret);
    if (clientSecret !== null) {
      openModal();
    }
    if (user !== null && cart.length > 0) {
      if (clientSecret !== null && user !== null && cart.length > 0) {
        dispatch(updateInventory(cart))
          .then(() =>
            dispatch(
              removeItemsFromCart({
                uid: user!.uid,
                name: user!.displayName,
                email: user!.email,
                cartItem: "",
              })
            )
          )
          .then(() => dispatch(fetchCart(user!.uid)));
        window.history.replaceState({}, document.title, "/" + "for-sale");
      }
    }
    if (callBackend) {
      dispatch(fetchClothingInfo()).then(() =>
        dispatch({ type: "clothing/copyFilteredArray" })
      );
    }
  }, [user, cart]);

  const term = useSelector((state: RootState) => state.clothing.searchTerm);

  const info = useSelector((state: RootState) => {
    return state.clothing.filteredResults.filter(
      (element: { title: string }) => {
        if (element.title?.toLowerCase().includes(term?.toLowerCase())) {
          return element;
        }
      }
    );
  });

  const filter = useSelector(
    (state: RootState) => state.clothing.mensWomensKidsFilterValue
  );

  let filteredResults;

  if (filter === "reset") {
    filteredResults = info;
  } else {
    filteredResults = info.filter(
      (element: { [key: string]: any }) => element[filter] === true
    );
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Container>
      <Head>
        <title>For Sale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        ></link>
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
        <Options sneaker={false} clothing={true} />
        <SneakerFeed filteredResults={filteredResults} type="for-sale" />
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AddToCartModalWrapper>
            <h2>Order Completed</h2>
            <h3>Thank you for ordering with us!</h3>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </AddToCartModalWrapper>
        </Modal>
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

const AddToCartModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  color: #fff;
  border: none;
  border-radius: 4.4px;
  background-color: #7d00ff;
  border-color: #7d00ff;
  width: 45%;
  margin-top: 15px;
  padding: 8px 14px;
  &:hover {
    background-color: #7b00ff94;
    border-color: #7b00ff87;
  }
`;
