import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import firebase from "../../firebase/clientApp";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { Auth, getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useRouter } from "next/router";
import LoggedInDropDown from "../LoggedInDropDown/LoggedInDropDown";
import { id } from "date-fns/locale";
import { Cart } from "./Cart";

export const DesktopMenu = () => {
  const [user]: AuthStateHook = useAuthState(firebase.auth() as unknown as Auth);
  const router = useRouter();

  const addUser = async (data: object) => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "https://sneaker-mern-app.herokuapp.com/user",
      config
    );

    if (response.ok) {
      const json = await response.json();
    }
  };

  const createCart = async (data: object) => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "https://sneaker-mern-app.herokuapp.com/createCart",
      config
    );

    if (response.ok) {
      const json = await response.json();
    }
  };

  useEffect(() => {
    if (user && user?.metadata.creationTime === user?.metadata.lastSignInTime) {
      addUser({
        name: user?.displayName,
        email: user?.email,
        uid: user?.uid,
      });

      createCart({
        name: user?.displayName,
        email: user?.email,
        uid: user?.uid,
        cart: [],
      });
    }
  }, [user]);

  const loggedInUserId = () => {
    if (user && user.uid) {
      return true;
    } else {
      return false;
    }
  };

  const loggedIn = loggedInUserId();

  return (
    <StyledMenu>
      <Link href={"/"}>
        <NavPages>Sneaker Releases</NavPages>
      </Link>
      <Link href={"/for-sale"}>
        <NavPages>For Sale</NavPages>
      </Link>
      {!loggedIn && (
        <Link href={"/auth"}>
          <NavPages>Login</NavPages>
        </Link>
      )}
      {/* <Link href={"/for-sale"}>
        <NavPages type={type}>Tools</NavPages>
      </Link>
      <Link href={"/about"}>
        <NavPages type={type}>About Us</NavPages>
      </Link> */}
      {/* <button onClick={logout}>Log out</button> */}
      {loggedIn && <Cart />}

      {loggedIn && <LoggedInDropDown />}
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  width: 630px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavPages = styled.a`
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  line-height: 19px;
  cursor: pointer;
  :hover {
    color: #4c4b4b;
    border-bottom: solid 2px #4c4b4b;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 13px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 14px;
  }
`;
