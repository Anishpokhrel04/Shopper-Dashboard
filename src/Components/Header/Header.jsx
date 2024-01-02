import React, { useState } from "react";
import Head from "./Head";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="start">
            <div className="buthrefn" style={
              {cursor:"pointer"}
            }>LOG IN</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
