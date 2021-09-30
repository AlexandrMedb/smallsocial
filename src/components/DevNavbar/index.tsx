import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink, useHistory } from "react-router-dom";

export const DevNavbar = () => {
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
        <NavLink style={{ marginRight: "20px" }} to="/">
          Main
        </NavLink>
      </li>
      <li>
        <NavLink to="/example">ReuxExample</NavLink>
      </li>
    </ul>
  );
};
