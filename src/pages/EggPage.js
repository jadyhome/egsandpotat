import React from "react";
import { Link } from "react-router-dom";

const EggPage = () => {
  return (
    <div className="eggpg">
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
      <div className="backtoabout">
        {
          <Link to="/about" className="to-aboutpg">
            back to about page
          </Link>
        }
      </div>
      </section>
    </div>
  );
};

export default EggPage;
