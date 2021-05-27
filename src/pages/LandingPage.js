import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="oven">
        {
          <Link to="/home" className="to-homepg">
            IMG HERE
          </Link>
        }
      </div>
    </div>
  );
};

export default LandingPage;
