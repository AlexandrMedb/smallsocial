import React from "react";
import { NavLink } from "react-router-dom";

// import { NavLink, useHistory } from "react-router-dom";

import { selectOnlineStatus } from "../../pages/ProfilePage/reducer";
import { useAppSelector } from "../../app/hooks";

export const DevNavbar = () => {
  const Online = useAppSelector(selectOnlineStatus);
  let statusColor = Online ? "lightgrey" : "darkgrey";
  const style = {
    // position: "absolute",
    padding: "20px",
    background: statusColor,
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    listStyle: "none",
  } as React.CSSProperties;

  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down" style={style}>
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/">
          Main
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/example">
          ReuxExample
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  );
};
