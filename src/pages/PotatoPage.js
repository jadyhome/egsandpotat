import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PotatoPageData } from "../potatopg-data";

const PotatoPage = () => {
  const [potatoRecipes, setPotatoRecipes] = useState([]);

  useEffect(() => {
    fetchPotatoRecipeData();
  }, []);

  const fetchPotatoRecipeData = () => {
    setPotatoRecipes(PotatoPageData);
  };

  return (
    <div className="potatopg">
      <section className="pota">
        potatoes
        <div className="recipe-container">
          {potatoRecipes.map((potato, index) => {
            return (
              <div key={index} className="recipe-icons">
                <div className="recipe-img">{potato.image}</div>
                <p className="recipe-name">{potato.recipe_name}</p>
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

export default PotatoPage;
