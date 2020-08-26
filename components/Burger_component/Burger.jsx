import React, { useState } from 'react';
import Burger_Style from './Burger.styled';

function Burger({openMenu, setOpenMenu}) {

  return (
    <Burger_Style open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <div />
      <div />
      <div />
    </Burger_Style>
  )
}

export default Burger;