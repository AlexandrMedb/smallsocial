import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewChat } from "../../store/MessageList/index";

import { getTextStatus, getOnline } from "../../store/profile/selector";

import { selectChat } from "../../store/MessageList/selectors";

export const HomePage = () => {
  const dispatch = useDispatch();

  const textStatus = useSelector(getTextStatus);

  const online = useSelector(getOnline);

  let bg = online ? "green" : "red";

  console.log(useSelector(selectChat(0)));

  return (
    <div style={{ backgroundColor: bg }}>
      Value: {textStatus}{" "}
      <button
        onClick={() => {
          dispatch(addNewChat("arr"));
        }}
      >
        Increment
      </button>
    </div>
  );
};
