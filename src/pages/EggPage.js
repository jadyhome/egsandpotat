import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EggPageData } from "../eggpg-data";

const EggPage = () => {
  const [eggRecipes, setEggRecipes] = useState([]);

  useEffect(() => {
    fetchEggRecipeData();
  }, []);

  const fetchEggRecipeData = () => {
    setEggRecipes(EggPageData);
  };

  return (
    <div className="eggpg">
      <section className="eg">
        eggs
        <div className="recipe-container">
          {eggRecipes.map((egg, index) => {
            return (
              <div key={index} className="recipe-icons">
                <div className="recipe-img">{egg.image}</div>
                <p className="recipe-name">{egg.recipe_name}</p>
              </div>
            );
          })}
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
