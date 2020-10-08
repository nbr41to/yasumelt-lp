import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledComponent } from "./Layout.styled"
import logo from "../../images/flame-1049.png"
import Burger from "../Burger"

function Layout({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <StyledComponent open={open}>
      <header>
        <div className="site-logo">
          <img src={logo} width="30px" height="30px" />
          <h1>reset-button</h1>
        </div>
        <ul>
          <li><Link to="/">TOP</Link></li>
          <li><Link to="about">ABOUT</Link></li>
          <li><Link to="contents">CONTENTS</Link></li>
          <li><Link to="contact">CONTACT</Link></li>
          <button>メンバーになる</button>
        </ul>
        <Burger open={open} setOpen={setOpen} />
      </header>
      {children}
      <footer>
        <small>Copyright 2020 yasumelt</small>
      </footer>
    </StyledComponent>
  );
}

export default Layout;
