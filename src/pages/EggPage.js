import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const EggPage = () => {
  return (
    <div className="eggpage">
      <section className="eggrecipe">
        <div className="info">
          <h1>RECIPE NAME</h1>
          <h4>ingredients</h4>
          <p>directions</p>
          <p>info</p>
        </div>
      </section>
      <section className="illus">ILLUSTRATION HERE</section>
    </div>
  );
};

export default EggPage;
