import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
Modal.setAppElement("#__next");

export const ItemDetails = ({ data }: any) => {
  const [user, loading, error]: any = useAuthState(firebase.auth() as any);
  const [selectedSize, setSelectedSize] = useState('');
  const [modalIsOpen, setIsOpen] = useState(true);
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
  } = data;

  let mensWomensKids;

  const router = useRouter();

  const addToCart = async (data: any) => {
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    let response = await fetch(
      "https://sneaker-mern-app.herokuapp.com/addToCart",
      config
    );

    console.log(response);
  };

  const handleAddToCart = () => {
    if (!user) {
      router.push("/auth");
    } else {
      console.log("works");
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
        },
      });
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
    if(selectedSize === size){
    return <SizeItem selected={false} onClick={() => setSelectedSize(size)}>{size}</SizeItem>;
  }
  else{
    return <SizeItem selected={true} onClick={() => setSelectedSize(size)}>{size}</SizeItem>;
  }
  });

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }
  let subtitle : any;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ItemDetailsContainer>
      <ItemTitle>{title}</ItemTitle>
      <MensWomensKidsTag>{mensWomensKids}</MensWomensKidsTag>
      <Colorway>{colorway}</Colorway>
      <Price>{"$" + (Math.round(price * 100) / 100).toFixed(2)}</Price>
      <SizeContainer>{sizeItems}</SizeContainer>
      <ItemDescription>
        Introducing the first-ever Max Air unit designed specifically for Nike
        Sportswear, the Nike Air Max 270 delivers visible air and unbelievable
        comfort under every step. It has callbacks to the original 1991 Air Max
        180 on its exaggerated tongue top and heritage tongue logo while also
        being upgraded for modern comfort.
      </ItemDescription>
      <AddToCartButton onClick={handleAddToCart}>Add To Cart</AddToCartButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
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

const SizeItem = styled.button<{selected: boolean}>`
  width: 42px;
  height: 42px;
  background-color: ${props=>props.selected? '#f5f5f5' :'#d4d4d4'  };
  margin-top: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  border: ${props=> !props.selected? 'black 1 px solid' :'none'  };
  &:hover {
    background-color: #b9b7b7;
    border-bottom: solid black 2px;
  }
`;

const AddToCartButton = styled.button`
  color: #fff;
  background-color: #0e1111;
  border-color: #0e1111;
  padding: 8px 14px;
  &:hover {
    background-color: #0e1111b6;
    border-color: #0e1111b6;
  }
`;

const ItemDescription = styled.p`
  margin-bottom: 15px;
`;
