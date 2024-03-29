import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import firebase from "../../firebase/clientApp";
import { fetchCart } from "../../store/ClothingReleaseInfo";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
Modal.setAppElement("#__next");
import { useAppDispatch } from "../../store/store";
import { Auth } from "firebase/auth";

interface PropTypes {
  data: {
    images: string[];
    title: string;
    colorway: string;
    kidsFlag: boolean;
    mensFlag: boolean;
    womensFlag: boolean;
    shoe: boolean;
    clothing: boolean;
    price: number;
    qty: number;
    availableSizeQty: Record<string, number>;
    skuNumber: string;
    description: string;
  };
}

export const ItemDetails = ({ data }: PropTypes) => {
  const [user]: AuthStateHook = useAuthState(
    firebase.auth() as unknown as Auth
  );
  const [selectedSize, setSelectedSize] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const {
    images,
    title,
    colorway,
    kidsFlag,
    mensFlag,
    womensFlag,
    shoe,
    clothing,
    price,
    qty,
    availableSizeQty,
    skuNumber,
    description,
  } = data;

  let mensWomensKids;

  const router = useRouter();

  const addToCart = async (data: Record<string, unknown>) => {
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "https://sneaker-mern-app.herokuapp.com/addToCart",
      config
    );
  };

  const handleCheckout = () => {
    if (!user) {
      router.push("/auth");
    } else {
      router.push("/checkout");
    }
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      toast("Please Select a Size", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (!user) {
        router.push("/auth");
      } else {
        addToCart({
          name: user?.displayName,
          email: user?.email,
          uid: user?.uid,
          cartItem: {
            images: images,
            title: title,
            colorway: colorway,
            kidsFlag: kidsFlag,
            mensFlag: mensFlag,
            womensFlag: womensFlag,
            price: price,
            skuNumber: skuNumber,
            size: selectedSize,
            uniqueItemID: "id" + new Date().getTime(),
          },
        });
        openModal();
      }
    }
  };

  if (mensFlag) {
    mensWomensKids = "Mens";
  } else if (womensFlag) {
    mensWomensKids = "Womens";
  } else if (kidsFlag) {
    mensWomensKids = "Kids";
  }

  const sizeItems = Object.keys(availableSizeQty).map((size, index) => {
    if (availableSizeQty[size] == 0) {
      return (
        <SizeItem soldOut={true} selected={false} disabled={true} key={index}>
          {size}
        </SizeItem>
      );
    } else if (selectedSize === size) {
      return (
        <SizeItem
          key={index}
          soldOut={false}
          selected={true}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </SizeItem>
      );
    } else {
      return (
        <SizeItem
          key={index}
          soldOut={false}
          selected={false}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </SizeItem>
      );
    }
  });

  const soldOut = qty < 1 ? true : false;

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

  const closeModal = () => {
    dispatch(fetchCart(user!.uid));
    setIsOpen(false);
    setSelectedSize("");
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ItemDetailsContainer>
      <ItemTitle>{title}</ItemTitle>
      <MensWomensKidsTag>{mensWomensKids}</MensWomensKidsTag>
      <Colorway>{colorway}</Colorway>
      <Price>{"$" + (Math.round(price * 100) / 100).toFixed(2)}</Price>
      <SizeContainer>{sizeItems}</SizeContainer>
      <ItemDescription>{description}</ItemDescription>
      <ButtonWrapper>
        {!soldOut && (
          <AddToCartButton onClick={handleAddToCart}>
            Add To Cart
          </AddToCartButton>
        )}
        {soldOut && <SoldOutButton disabled={true}>Sold Out</SoldOutButton>}
        <AddToCartButton onClick={handleCheckout}>Checkout</AddToCartButton>
      </ButtonWrapper>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddToCartModalWrapper>
          <h2>Item Added To Cart</h2>
          <h3>{title}</h3>
          <AddedToCartImage src={images[0]} />
          <MensWomensKidsTag>{mensWomensKids}</MensWomensKidsTag>
          <AddToCartSize>{"Size: " + selectedSize}</AddToCartSize>
          <AddToCartButton onClick={closeModal}>close</AddToCartButton>
        </AddToCartModalWrapper>
      </Modal>
    </ItemDetailsContainer>
  );
};

const ItemDetailsContainer = styled.div`
  width: 40%;
  background-color: #e7eaed;
  height: 100%;
  border: 19px solid white;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ItemTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
`;
const MensWomensKidsTag = styled.p`
  color: #515151;
  font-size: 14px;
  margin-top: 4px;
`;

const Colorway = styled.p`
  color: #757575;
  font-size: 14px;
  margin-top: 4px;
`;

const Price = styled.p`
  color: #383838;
  font-size: 16px;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 0px;
`;

const SizeItem = styled.button<{ selected: boolean; soldOut: boolean }>`
  width: 42px;
  height: 42px;
  background-color: ${(props) => (props.selected ? "#ffffff" : "#ffffff")};
  margin-top: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  cursor: ${(props) => (props.soldOut ? "auto" : "pointer")};
  align-items: center;
  opacity: ${(props) => (props.soldOut ? "0.6" : "1")};
  font-size: 14px;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 1px;
  border: ${(props) => (props.selected ? "solid #7d00ff 3px" : "none")};
  &:hover {
    background-color: ${(props) => (props.soldOut ? "null" : "#ffffff")};
    border: ${(props) => (props.soldOut ? "null" : "solid #7d00ff 3px")};
  }
`;

const AddToCartButton = styled.button`
  color: #fff;
  background-color: #7d00ff;
  border-color: #7d00ff;
  width: 45%;
  padding: 5px 7px;
  border-radius: 4.4px;
  margin-right: 10px;
  border: none;
  padding: 8px 14px;
  &:hover {
    background-color: #7d00ffb6;
    border-color: #7d00ffb6;
  }
`;
const SoldOutButton = styled.button`
  color: #fff;
  background-color: #7d00ff;
  border-color: #7d00ff;
  width: 45%;
  margin-right: 10px;
  padding: 8px 14px;
`;

const ItemDescription = styled.p`
  margin-bottom: 15px;
`;

const AddToCartModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AddedToCartImage = styled.img`
  width: 60%;
`;

const AddToCartSize = styled.p`
  color: #515151;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
