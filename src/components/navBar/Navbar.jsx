import React from "react";
import logo from "../../assets/logo.png";
import "./navBar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navItems">
        <ul className="navLogo">
          <li>
            <img
              src={logo}
              alt=""
              style={{ height: "27px", cursor: "pointer" }}
            />
          </li>
          <li id="brand">
            CREATOSAURUS |<span style={{ "fontWeight": "300" }}> Beta</span>
          </li>
        </ul>
        <ul className="midContainer">
          <li>Apps</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <ul className="rightContainer">
          <li>Login</li>
          <li>Sign up</li>
          <li style={{ fontWeight: "bold" }}>Book Demo</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
