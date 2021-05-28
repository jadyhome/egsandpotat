import React from "react";
import { Link } from "react-router-dom";

const PotatoPage = () => {
  return (
    <div className="potatopg">
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

export default PotatoPage;
