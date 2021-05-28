import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <p className="about-info">
        ABOUT WEBSITE INFO HERE
        <br />
        {
          <Link to="/" className="tolandingpg">
            back to landing pg
          </Link>
        }
      </p>
      <div className="about-divide">
        <div className="egg-icon">
          {
            <Link to="/egg" className="toeggpage">
              img of egg here
            </Link>
          }
        </div>
        <div className="potato-icon">
          {
            <Link to="/potato" className="topotatopage">
              img of potato here
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
