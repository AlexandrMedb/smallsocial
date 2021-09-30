import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

import { ReduxExample } from "../pages/ReduxExample";

export const useRoutes = (isAuthenticated: boolean) => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>

      <Route path="/example" exact>
        <ReduxExample />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
