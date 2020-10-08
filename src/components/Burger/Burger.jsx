import React from 'react';
import { StyledComponent } from './Burger.styled';

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <StyledComponent open={open} onClick={() => setOpen(!open)}>
      <div>
        <span />
        <span />
        <span />
      </div>
      <div className="overlay" onClick={() => setOpen(false)}></div>
    </StyledComponent>
  )
}


export default Burger;
