import React from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";

const PotatoPage = () => {
  return (
    <div className="potatopage">
      <section className="illus">ILLUSTRATION HERE</section>
      <section className="potatorecipe">
        <div className="info">
          <h1>RECIPE NAME</h1>
          <h4>ingredients</h4>
          <p>directions</p>
          <p>info</p>
        </div>
      </section>
    </div>
  );
};

export default PotatoPage;
