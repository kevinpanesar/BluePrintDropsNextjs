import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const SearchBar = ({ clothing, sneaker }) => {
  const dispatch = useDispatch();
  const term = useSelector((state) => state.sneaker.searchTerm);
  // const element = <FontAwesomeIcon className="fa" icon={faSearch} />;

  const handleChange = (e) => {
    if (clothing == true) {
      dispatch({ type: "clothing/setSearchTerm", payload: e.target.value });
    } else if (sneaker == true) {
      dispatch({ type: "sneaker/setSearchTerm", payload: e.target.value });
    }
  };

  return (
    <Form id="searchBar" onChange={handleChange}>
      <Input type="search" placeholder="Search..." defaultValue={term} />
      <ImageDiv>
        <Image src="/Media/search.svg" width={30} height={30} />
      </ImageDiv>
    </Form>
  );
};

const Form = styled.form`
  height: 30px;
  box-sizing: border-box;
  border-radius: 25px;
  margin: 10px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
   @media (min-width: 769px) {

          :hover{
            input{
              background-color: red;
            }
          }
  }

  :hover {
    cursor: pointer;

    input {
      max-height: 50px;
      height: 50px;
      width: 100vw;
      padding-right: 10px;
      display: block;
      background-color: white;

    }
    .fa {
      color: black;
    }
  }
`;

const Input = styled.input`
  transition: max-height 0.3s ease-out;
  position: absolute;
  padding-left: 10px;
  top: 60px;
  right: 0px;
  width: 0%;
  max-height: 0px;
  height: 0px;
  outline: 0;
  border: 0;
  font-size: 1em;
  overflow: none;
  background-color: #f5f5f5;

   @media (min-width: 769px) {

          :hover{
              background-color: red;
          }
  }
`;

const ImageDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
