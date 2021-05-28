import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="oven">
        {
          <Link to="/about" className="to-aboutpg">
            IMG HERE
          </Link>
        }
      </div>
    </div>
  );
};

export default LandingPage;
