import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const EggRecipe = () => {
  return (
    <div className="eggpage">
      <section className="eggrecipe">
        <div className="recipe-info">
          <h1>RECIPE NAME</h1>
          <h4>ingredients</h4>
          <p>directions</p>
          <p>info</p>
          <p>
            {
              <Link to="/egg" className="toeggpage">
                back to egg page
              </Link>
            }
          </p>
        </div>
      </section>
      <section className="illus">ILLUSTRATION HERE</section>
    </div>
  );
};

export default EggRecipe;
