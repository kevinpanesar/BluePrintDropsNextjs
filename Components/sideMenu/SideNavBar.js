import React from 'react'
import styled from 'styled-components';

function SideNavBar({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 550;



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
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: #21587F;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};

    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

      @media (max-width: 1255px) {
        width: 1.5rem;
        height: 0.15rem;
  }
  }
`;

export default SideNavBar