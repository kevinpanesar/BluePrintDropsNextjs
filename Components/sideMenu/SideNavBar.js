import React from "react";
import styled from "styled-components";

function SideNavBar({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export const StyledBurger = styled.button`
  right: 2rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 50;

  @media (max-width: 1255px) {
    height: 1.5rem;
  }

  @media (max-width: 750px) {
    top: 2%;
    right: 2%;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 30;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: black;
    z-index: 50;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(44deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-44deg)" : "rotate(0)")};
    }

    @media (max-width: 1255px) {
      width: 1.5rem;
      height: 0.10rem;
    }
  }
`;

export default SideNavBar;
