import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getValue } from "../../store/number/selector";
import { getTextStatus, getOnline } from "../../store/profile/selector";

export const HomePage = () => {
  const dispatch = useDispatch();

  const textStatus = useSelector(getTextStatus);

  const online = useSelector(getOnline);

  let bg = online ? "green" : "red";

  // dispatch();

  // View: the UI definition
  return (
    <div style={{ backgroundColor: bg }}>
      Value: {textStatus} <button onClick>Increment</button>
    </div>
  );
};
