import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink className="menu__link" to="/">
        Home
      </NavLink>
      <NavLink className="menu__link" to="/filters">
        Search filter
      </NavLink>
      <NavLink className="menu__link" to="/profile">
        Profile
      </NavLink>
    </header>
  );
};

export default Header;
