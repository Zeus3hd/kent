import React from "react";
import logo from "../imgs/200pix.png";
import menu from "../imgs/menu.png";

const Navbar = () => {
  return (
    <nav>
      <a href="#a">
        <img alt="logo" src={logo} id="logo" />
      </a>
      <a href="#b">
        <img alt="menu" src={menu} id="menu" />
      </a>
    </nav>
  );
};

export default Navbar;
