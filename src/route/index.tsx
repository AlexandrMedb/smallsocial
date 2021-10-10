import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { ChatPage } from "../pages/ChatsPage";
import { ProfilePage } from "../pages/ProfilePage/Index";
import { MainPage } from "../pages/MainPage";

import { ReduxExample } from "../pages/ReduxExample";
import {
  reduceProfilePath,
  reduceHomePath,
  reduceExamplePath,
  reduceChatIdPath,
  reduceChatsPath,
} from "./pathReducers";

export const useRoutes = (isAuthenticated: boolean) => {
  return (
    <Switch>
      <Route exact path={reduceHomePath()} component={MainPage} />
      <Route exact path={reduceExamplePath()} component={ReduxExample} />
      <Route exact path={reduceProfilePath()} component={ProfilePage} />
      <Route exact path={reduceChatsPath()} component={ChatPage} />
      <Route exact path={reduceChatIdPath()} component={ChatPage} />
      <Redirect to={reduceHomePath()} />
    </Switch>
  );
};
