import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const PotatoRecipe = () => {
  return (
    <div className="potatopage">
      <section className="illus">ILLUSTRATION HERE</section>
      <section className="potatorecipe">
        <div className="recipe-info">
          <h1>RECIPE NAME</h1>
          <h4>ingredients</h4>
          <p>directions</p>
          <p>info</p>
          <p>
            {
              <Link to="/potato" className="topotatopage">
                back to potato page
              </Link>
            }
          </p>
        </div>
      </section>
    </div>
  );
};

export default PotatoRecipe;
