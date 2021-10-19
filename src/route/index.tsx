import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { ChatPage } from "../pages/ChatsPage";
import { ProfilePage } from "../pages/ProfilePage/Index";
import { HomePage } from "../pages/HomePage";
import { Signup } from "../pages/SigupPage";
import { Login } from "../pages/LoginPage";

// import { ReduxExample } from "../pages/ReduxExample";
import {
  reduceProfilePath,
  reduceHomePath,
  // reduceExamplePath,
  reduceChatIdPath,
  reduceChatsPath,
} from "./pathReducers";

export const useRoutes = (isAuthenticated: boolean) => {
  return (
    <Switch>
      <Route exact path={reduceHomePath()} component={HomePage} />
      {/* <Route exact path={reduceExamplePath()} component={ReduxExample} /> */}
      <Route exact path={reduceProfilePath()} component={ProfilePage} />
      <Route exact path={reduceChatsPath()} component={ChatPage} />
      <Route exact path={reduceChatIdPath()} component={ChatPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Redirect to={reduceHomePath()} />
    </Switch>
  );
};
