import React, { useState } from 'react';
import styled from 'styled-components';
import * as styles_var from '../Styles/Variables'

function Burger({openMenu, setOpenMenu}) {

  return (
    <BurgerMenu_Style open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <div />
      <div />
      <div />
    </BurgerMenu_Style>
  )
}

export default Burger;


//------------------Styles------------------

const BurgerMenu_Style = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 1.55rem;
    height: 0.2rem;
    background: ${styles_var.coral_color };
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      /* transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'}; */
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;