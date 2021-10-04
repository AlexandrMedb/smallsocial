import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage/Index";

import { ReduxExample } from "../pages/ReduxExample";
import {
  reduceProfilePath,
  reduceHomePath,
  reduceExamplePath,
  reduceChatIdPath,
} from "./pathReducers";

export const useRoutes = (isAuthenticated: boolean) => {
  return (
    <Switch>
      <Route exact path={reduceHomePath()} component={MainPage} />
      {/* <Route path={getPostsByIdPath()} component={Post} /> */}
      <Route exact path={reduceExamplePath()} component={ReduxExample} />
      <Route exact path={reduceProfilePath()} component={ProfilePage} />
      <Route exact path={reduceChatIdPath()} component={MainPage} />
      <Redirect to={reduceHomePath()} />
    </Switch>
  );
};
