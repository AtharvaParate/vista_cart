import Button from "../Button";
import "./navbar.css";
import User from "./user-solid.svg";

import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={User} alt="user-img" className="img"></img>
    </div>
  );
};
