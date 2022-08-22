import React, { FormEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import { RootState } from "../../store/store";

interface SearchBarProps {
  clothing: boolean;
  sneaker: boolean;
}

export const SearchBar = ({ clothing, sneaker }: SearchBarProps) => {
  const dispatch = useDispatch();
  const term = useSelector((state: RootState) => state.sneaker.searchTerm);
  // const element = <FontAwesomeIcon className="fa" icon={faSearch} />;

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    (event: any) => event.preventDefault();
    if (clothing == true) {
      dispatch({
        type: "clothing/setSearchTerm",
        payload: event.currentTarget.value,
      });
    } else if (sneaker == true) {
      dispatch({
        type: "sneaker/setSearchTerm",
        payload: event.currentTarget.value,
      });
    }
  };

  return (
    <Form id="searchBar" onChange={(event) => handleChange(event)}>
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

  :hover {
    cursor: pointer;

    input {
      max-height: 50px;
      height: 50px;
      width: 100vw;
      margin-top: 10px;
      padding-right: 10px;
      display: block;
      background-color: white;

      @media (min-width: 769px) {
        width: 100%;
        height: 90px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        border: 2px solid #f5f5f5;
      }
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
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 130%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 150%;
  }
`;
