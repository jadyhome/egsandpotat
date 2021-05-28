import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import EggPage from "../pages/EggPage";
import PotatoPage from "../pages/PotatoPage";
import EggRecipe from "../pages/EggRecipe";
import PotatoRecipe from "../pages/PotatoRecipe";

const Router = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  return (
    <main>
      {pageLoading ? (
        <h1 className="pageloading">PAGE IS LOADING...</h1>
      ) : (
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route path="/about" component={() => <AboutPage />} />
          <Route path="/egg" component={() => <EggPage />} />
          <Route path="/potato" component={() => <PotatoPage />} />
          <Route path="/eggrecipe" component={() => <EggRecipe />} />
          <Route path="/potatorecipe" component={() => <PotatoRecipe />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
