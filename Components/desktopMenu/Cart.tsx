import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { fetchCart } from "../../store/ClothingReleaseInfo";
import { useState } from "react";
import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { getAuth } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
export const Cart = () => {
  const [user, loading, error]: any = useAuthState(firebase.auth() as any);
  const dispatch = useAppDispatch();

  const cartNumber = useSelector((state: RootState) => {
    return state.clothing.cart.length;
  });

  useEffect(() => {
    dispatch(fetchCart(user.uid));
  }, []);

  return (
    <Container>
      <NumberOfItemsWrapper>{cartNumber}</NumberOfItemsWrapper>
      <img src="/Media/shopping-cart.png" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
