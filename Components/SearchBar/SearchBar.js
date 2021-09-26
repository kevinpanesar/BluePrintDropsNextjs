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
    // <form className="searchBar" onChange={(e) => {
    //     dispatch({ type: 'sneaker/setSearchTerm', payload: e.target.value })

    // }}>
    //     <input type="search" placeholder="Search..." defaultValue={term}/>
    // </form>
    <Form id="searchBar" action="">
      <Input type="search" placeholder="Search here ..." />
      {element}
    </Form>
  );
};

const Form = styled.form`
  position: relative;
  left: 140px;
  bottom: 17px;
  transform: translate(-50%, -50%);
  transition: all 1s;
  width: 50px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 5px;
  :hover {
    width: 230px;
    cursor: pointer;
    input {
      display: block;
    }
    .fa {
      background: white;
      color: black;
    }
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
`;
