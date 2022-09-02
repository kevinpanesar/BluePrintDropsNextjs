// auth.tsx
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Header } from "../Components/Header/Header";
import firebase from "../firebase/clientApp";
import styled from "styled-components";
import { DesktopMenu } from "../Components/desktopMenu/DesktopMenu";
import { SearchBar } from "../Components/SearchBar/SearchBar";

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // GitHub as the only included Auth Provider.
  // You could add and configure more here!

  signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID,{ provider: firebase.auth.EmailAuthProvider.PROVIDER_ID}],
};

const SignInScreen = () => {
  return (
    <Container>
      <DesktopContentContainer>
        <HeaderContainer>
          <Header type={""} />
          <DesktopMenu />
          <SearchNavContainer>
            <SearchBar sneaker={true} clothing={false} />
            {/* <NavContainer>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </NavContainer> */}
          </SearchNavContainer>
        </HeaderContainer>
        <SocialMediaLogin>
          <LoginHeader>Log in to Blueprint Drops</LoginHeader>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </SocialMediaLogin>
      </DesktopContentContainer>
    </Container>
  );
};

export default SignInScreen;

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

const SearchNavContainer = styled.div`
  display: flex;
`;

const SocialMediaLogin = styled.div`
  margin-top: 200px;
  width: 420px;
  background-color: #f5f5f5;
  padding-bottom: 100px;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.3rem #E7EAED);
`;

const DesktopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

const LoginHeader = styled.p`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 15px;
  font-weight: 600;
`;
