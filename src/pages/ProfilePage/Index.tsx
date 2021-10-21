import React from "react";

import { useDispatch, useSelector } from "react-redux";

// import styles from "../../features/counter/Counter.module.css";

import { getOnline, getTextStatus } from "../../store/profile/selector";

import {
  changeTesxtstatus,
  changeTesxtstatusAsync,
} from "../../store/profile/actions";

export const ProfilePage = () => {
  // const count = useSelector(selectCount);

  const Online = useSelector(getOnline);
  const TextStatus = useSelector(getTextStatus);
  let statusColor = Online ? "green" : "red";

  const dispatch = useDispatch();

  return (
    <main>
      <h1
        onClick={() => dispatch(changeTesxtstatusAsync())}
        style={{ background: statusColor }}
      >
        I am at {TextStatus} days {1}
      </h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch(changeTesxtstatus(e.target.value));
        }}
      />
    </main>
  );
};
