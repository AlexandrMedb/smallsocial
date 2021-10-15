import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTextStatus, getOnline } from "../../store/profile/selector";

import { changeOnlineStatus } from "../../store/profile/actions";

export const HomePage = () => {
  const dispatch = useDispatch();

  const textStatus = useSelector(getTextStatus);

  const online = useSelector(getOnline);

  let bg = online ? "green" : "red";

  // dispatch();

  // View: the UI definition
  return (
    <div style={{ backgroundColor: bg }}>
      Value: {textStatus}{" "}
      <button
        onClick={() => {
          dispatch(changeOnlineStatus());
        }}
      >
        Increment
      </button>
    </div>
  );
};
