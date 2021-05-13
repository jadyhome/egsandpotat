import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="eg">
        eggs
        <div className="dropdown">
          <select className="">
            <option value="">🥚🥚🥚</option>
            <option value="linkhere">option#1</option>
            <option value="linkhere">option#2</option>
          </select>
        </div>
      </section>
      <section className="pota">
        potatoes
        <div className="dropdown">
          <select className="">
            <option value="">🥔🥔🥔</option>
            <option value="linkhere">option#1</option>
            <option value="linkhere">option#2</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
