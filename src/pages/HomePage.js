import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="eg">
        eggs
        <div className="recipe-icons">
          <ul className="icons">
            <li>
              {
                <Link to="/eggrecipe" className="to-egg">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/eggrecipe" className="to-egg">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/eggrecipe" className="to-egg">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/eggrecipe" className="to-egg">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/eggrecipe" className="to-egg">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/eggrecipe" className="to-egg">
                  icon
                </Link>
              }
            </li>
          </ul>
        </div>
      </section>

      <section className="pota">
        potatoes
        <div className="recipe-icons">
          <ul className="icons">
            <li>
              {
                <Link to="/potatorecipe" className="to-potato">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/potatorecipe" className="to-potato">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/potatorecipe" className="to-potato">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/potatorecipe" className="to-potato">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/potatorecipe" className="to-potato">
                  icon
                </Link>
              }
            </li>
            <li>
              {
                <Link to="/potatorecipe" className="to-potato">
                  icon
                </Link>
              }
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
