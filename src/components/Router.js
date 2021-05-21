import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";

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
          <Route path="/home" component={() => <HomePage />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
