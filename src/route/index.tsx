import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage/Index";

import { ReduxExample } from "../pages/ReduxExample";

const composePath = (...args: Array<Function | string>) =>
  args
    .map((item) => (typeof item === "function" ? item() : item.toString()))
    .join("/");

export const getHomePath = () => "";
export const getProfilePath = () => "";

export const getChatsPath = () => composePath(getHomePath(), "articles");

// export const getPostsByIdPath = (postId = ":postId") =>
//   composePath(getPostsPath(), postId);

// export const getPostCommentsByIdPath = (postId = ":postId") =>
//   composePath(getPostsPath(), postId, "comments");

// export const getPostComments404Path = (postId = ":postId") =>
//   composePath(getPostsPath(), postId, "404");

export const useRoutes = (isAuthenticated: boolean) => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {/* <Route path={getPostsByIdPath()} component={Post} /> */}
      <Route exact path="/example" component={ReduxExample} />
      <Route exact path="/profile" component={ProfilePage} />{" "}
      <Route exact path="/:chatId" component={MainPage} />
      <Redirect to="/" />
    </Switch>
  );
};
