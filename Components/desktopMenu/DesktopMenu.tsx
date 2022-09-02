import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useRouter } from "next/router";
import LoggedInDropDown from "../LoggedInDropDown/LoggedInDropDown";
import { id } from "date-fns/locale";

export const DesktopMenu = ({ type }: any) => {
  const [user, loading, error]: any = useAuthState(firebase.auth() as any);
  const router = useRouter();

  const addUser = async (data: any) => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    let response = await fetch(
      "https://sneaker-mern-app.herokuapp.com/user",
      config
    );

    if (response.ok) {
      let json = await response.json();
    }
  };

  const createCart = async (data: any) => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    let response = await fetch(
      "https://sneaker-mern-app.herokuapp.com/createCart",
      config
    );

    if (response.ok) {
      let json = await response.json();
    }
  };

  useEffect(() => {
    if (user && user?.metadata.creationTime === user?.metadata.creationTime) {
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
        <NavPages type={type}>Sneaker Releases</NavPages>
      </Link>
      <Link href={"/for-sale"}>
        <NavPages type={type}>For Sale</NavPages>
      </Link>
      {!loggedIn && (
        <Link href={"/auth"}>
          <NavPages type={type}>Login</NavPages>
        </Link>
      )}
      {/* <Link href={"/for-sale"}>
        <NavPages type={type}>Tools</NavPages>
      </Link>
      <Link href={"/about"}>
        <NavPages type={type}>About Us</NavPages>
      </Link> */}
      {/* <button onClick={logout}>Log out</button> */}

      {loggedIn && <LoggedInDropDown />}
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  width: 630px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavPages = styled.a`
  color: ${(props) => (props.type === "desktop" ? "white" : "black")};
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
