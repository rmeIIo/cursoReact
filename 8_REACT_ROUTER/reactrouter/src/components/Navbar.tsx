import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        //</nav>className={({isActive}) => (isActive ? 'esta-ativo' : 'não-ativo')}
      >
        Home
      </NavLink>
      <NavLink to={"/about"}>Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
