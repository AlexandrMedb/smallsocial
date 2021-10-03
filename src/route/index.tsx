import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage/Index";

import { ReduxExample } from "../pages/ReduxExample";

const reducer = (
  previousValue: Function | string,
  currentValue: Function | string,
  index: number,
  Array: Array<Function | string>
) => {
  let a =
    typeof currentValue === "function"
      ? currentValue()
      : currentValue.toString();

  return index > 0 ? previousValue + "/" + a : a;
};

const reducePath = (...args: Array<Function | string>): string => {
  const path = args.reduce(reducer, "");
  if (path.length === 0) {
    return "/" + path;
  }
  if (typeof path == "string" && path[1] === "/") {
    return path.slice(1);
  }
  if (typeof path == "string") return path;
  return "";
};

const reduceHomePath = (path = "") => reducePath(path);

const reduceProfilePath = (path = "profile") =>
  reducePath(reduceHomePath, path);

const reduceExamplePath = (path = "example") =>
  reducePath(reduceHomePath, path);

const reduceChatIdPath = (path = ":chatId") => reducePath(reduceHomePath, path);

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
