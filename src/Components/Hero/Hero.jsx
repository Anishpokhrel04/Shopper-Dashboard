import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Heading from "../Header/Heading";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO CleanZ"
              title="Best Removing And Cleaning Services"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the Good Service.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <FaLongArrowAltRight className="icon" />
              </button>
              <button >
                VIEW DETAILS <FaLongArrowAltRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
