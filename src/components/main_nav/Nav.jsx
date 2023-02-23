import React from "react";
import Burger from "./burger/burger";
import Logo from "./logo/logo";
import Menu from "./menu/menu";

const Nav = function () {
    return (
      <div className="main__nav nav">
        <Logo/>
        <Burger/>
        <Menu/>
      </div>  
    )
}

export default Nav;