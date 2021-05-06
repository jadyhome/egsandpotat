import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
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
          <Route exact path="/" component={() => <HomePage />} />
          {/* <Route path="/recipes" component={() => <RecipesPage />} /> */}
        </Switch>
      )}
    </main>
  );
};

export default Router;
