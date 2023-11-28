import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = ["home", "about"];
  return (
    <div className="header">
      <h1>cocktails db</h1>
      <div>
      {links.map((link) => {
        return <NavLink key={link}>{link}</NavLink>;
      })}
      </div>
     
    </div>
  );
};

export default Header;
