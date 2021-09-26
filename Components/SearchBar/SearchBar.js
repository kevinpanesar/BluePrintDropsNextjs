import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const SearchBar = () => {
  const dispatch = useDispatch();
  const term = useSelector((state) => state.sneaker.searchTerm);

  const element = <FontAwesomeIcon className="fa" icon={faSearch} />;
  return (
    <Form
      id="searchBar"
      onChange={(e) => {
        dispatch({ type: "sneaker/setSearchTerm", payload: e.target.value });
      }}
    >
      <Input type="search" placeholder="Search..." defaultValue={term} />
      {element}
    </Form>
  );
};

const Form = styled.form`
  position: relative;
  left: 140px;
  bottom: 17px;
  transform: translate(-50%, -50%);
  width: 103%;
  height: 30px;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 5px;
  overflow: none;
  :hover {
    cursor: pointer;

    input {
      max-height: 50px;
      height: 50px;
      width: 100%;
      padding-right: 10px;
      display: block;
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
  top: 40px;
  left: 60px;
  width: 0%;
  max-height: 0px;
  height: 0px;
  outline: 0;
  border: 0;
  font-size: 1em;
  overflow: none;
`;
