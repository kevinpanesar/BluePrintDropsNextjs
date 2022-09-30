import React from "react";
import styled from "styled-components";
import {
  removeItemsFromCart,
  fetchCart,
} from "../../store/ClothingReleaseInfo";
import { useAppDispatch } from "../../store/store";
import firebase from "../../firebase/clientApp";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { Auth } from "firebase/auth";

export interface CheckoutItemsProps {
  data: {
    images: string[];
    title: string;
    colorway: string;
    kidsFlag: boolean;
    mensFlag: boolean;
    womensFlag: boolean;
    price: number;
    size: number;
  };
}

export const CheckoutItems = ({ data }: CheckoutItemsProps) => {
  const dispatch = useAppDispatch();
  const [user]: AuthStateHook = useAuthState(
    firebase.auth() as unknown as Auth
  );
  const {
    images,
    title,
    colorway,
    kidsFlag,
    mensFlag,
    womensFlag,
    price,
    size,
  } = data;

  let mensWomensKids;
  if (mensFlag) {
    mensWomensKids = "Mens";
  } else if (womensFlag) {
    mensWomensKids = "Womens";
  } else if (kidsFlag) {
    mensWomensKids = "Kids";
  }

  const handleRemoveItem = () => {
    dispatch(
      removeItemsFromCart({
        uid: user!.uid,
        name: user!.displayName,
        email: user!.email,
        cartItem: data,
      })
    ).then(() => dispatch(fetchCart(user!.uid)));
  };

  return (
    <Container>
      <ImageContainer>
        <img src={images[0]} />
      </ImageContainer>
      <ItemInfoContainer>
        <TitleContainer>
          <h2>{title}</h2>
          <ItemColorway>{colorway}</ItemColorway>
        </TitleContainer>
        <ItemDescriptionContainer>
          <ItemWrapper>
            <ItemTitle> SIZE</ItemTitle>
            <ItemValue>{size + " " + mensWomensKids}</ItemValue>
          </ItemWrapper>
          <ItemWrapper>
            <ItemTitle>PRICE</ItemTitle>
            <ItemValue>{"$" + price}</ItemValue>
          </ItemWrapper>
          <RemoveFromCartButton onClick={handleRemoveItem}>
            Remove
          </RemoveFromCartButton>
        </ItemDescriptionContainer>
      </ItemInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 97%;
  border: 1px solid #ddd;
  background-color: #f6f6f6f8;
  height: 245px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 30%;
  background-color: white;
  height: 100%;
  border-right: 1px solid #ddd;
  img {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const TitleContainer = styled.div`
  margin: 16px;
`;

const ItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 16px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 0;
`;

const ItemTitle = styled.p`
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.5px;
  padding-right: 16px;
`;

const ItemValue = styled.p`
  font-size: 14px;
`;

const ItemColorway = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
`;

const RemoveFromCartButton = styled.button`
  color: #fff;
  background-color: #7d00ff;
  border-color: #7d00ff;
  border: none;
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 4.4px;
  margin-top: 6px;
  &:hover {
    background-color: #7d00ffb6;
    border-color: #7d00ffb6;
  }
`;
