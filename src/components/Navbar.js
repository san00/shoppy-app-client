import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

import Heading from "../styles/Heading";
import Nav, {NavAlignRight, NavAlignLeft } from "../styles/Navbar";

function Navbar() {
  return (
    <Nav>
      <Heading>Shop-A-Lot</Heading>
      <NavAlignRight><Cart/></NavAlignRight>
      <NavAlignLeft ><Link to="/signin">Signup</Link></NavAlignLeft>
      <Link to="/signup">Login</Link>
    </Nav>
 
  );
}

export default Navbar;
