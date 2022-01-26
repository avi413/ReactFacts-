import React from "react";
import logo from "../images/reactjs-icon.png";

export default function Navbar() {
    return (
        <nav className="navbar">
             <img src={logo} className="navbar__logo" alt="logo" />
             <h3 className="navbar__title">ReactFacts</h3>
             <h4 className="navbar__subtitle">React Course - Project 1</h4>
        </nav>
    )
}