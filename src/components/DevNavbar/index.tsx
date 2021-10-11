import React from "react";
import { NavLink } from "react-router-dom";

// import { NavLink, useHistory } from "react-router-dom";

import { selectOnlineStatus } from "../../app/slicers/Profile";
import { useAppSelector } from "../../app/hooks";

import {
  reduceProfilePath,
  reduceHomePath,
  reduceExamplePath,
  reduceChatsPath,
} from "../../route/pathReducers";

export const DevNavbar = () => {
  // const Online = useAppSelector(selectOnlineStatus);
  // let statusColor = Online ? "lightgrey" : "darkgrey";
  const style = {
    // position: "absolute",
    padding: "20px",
    background: "lightgrey",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    listStyle: "none",
  } as React.CSSProperties;

  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down" style={style}>
      <li>
        <NavLink style={{ marginRight: "20px" }} to={reduceHomePath()}>
          Main
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to={reduceChatsPath()}>
          Chats
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to={reduceExamplePath()}>
          ReuxExample
        </NavLink>
      </li>
      <li>
        <NavLink to={reduceProfilePath()}>Profile</NavLink>
      </li>
    </ul>
  );
};
