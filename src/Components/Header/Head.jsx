import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./head.scss";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>CLEANZ</h1>
            <span>ONLINE GOODS REMOVING & CLEANING SERVICES</span>
          </div>

          <div className="social">
            {" "}
            <FaFacebookF className="  icon" />
            <FaInstagram className="  icon" />
            <FaTwitter className=" icon" />
            <FaYoutube className=" icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
