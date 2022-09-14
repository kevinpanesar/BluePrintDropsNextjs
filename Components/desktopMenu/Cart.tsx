import firebase from "../../firebase/clientApp";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { fetchCart } from "../../store/ClothingReleaseInfo";
import { useState } from "react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "semantic-ui-react";
import { Auth, getAuth } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Cart = () => {
  const [user]: AuthStateHook = useAuthState(
    firebase.auth() as unknown as Auth
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartNumber = useSelector((state: RootState) => {
    return state.clothing.cart.length;
  });

  useEffect(() => {
    dispatch(fetchCart(user!.uid));
  }, []);

  const handleCartClick = () => {
    router.push("/checkout");
  };

  return (
    <Container onClick={() => handleCartClick()}>
      <NumberOfItemsWrapper>{cartNumber}</NumberOfItemsWrapper>
      <img src="/Media/shopping-cart.png" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  align-items: center;
  margin-bottom: 10px;
  img {
    height: 25px;
  }
`;
const NumberOfItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
