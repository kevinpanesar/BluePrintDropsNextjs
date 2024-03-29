import React from "react";
import styled from "styled-components";

interface SideNavBarProps{
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SideNavBar({ open, setOpen }: SideNavBarProps) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export const StyledBurger = styled.button<{open: boolean}>`
  right: 2rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: ${({open}) => (open? 'fixed' : 'relative')};
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 50;

  @media (min-width: 768px) {
      display: none;
  }

  @media (max-width: 1255px) {
    height: 1.9rem;
  }

  @media (max-width: 750px) {
    top: 2%;
    right: 2%;
  }

  @media (max-width: 375px) {
      padding: 3px;
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
      width: 1.7rem;
      height: 0.10rem;
    }

    @media (max-width: 375px) {
      width: 1.6rem;
  }
  }
`;

export default SideNavBar;
