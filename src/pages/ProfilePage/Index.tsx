import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  selectCount,
} from "../../features/counter/counterSlice";

import styles from "../../features/counter/Counter.module.css";

import {
  selectOnlineStatus,
  selectTesxtstatus,
  changeOnlineStatus,
  changeTesxtstatus,
} from "./reducer";

export const ProfilePage = () => {
  const count = useAppSelector(selectCount);

  const Online = useAppSelector(selectOnlineStatus);
  const TextStatus = useAppSelector(selectTesxtstatus);
  let statusColor = Online ? "green" : "red";

  const dispatch = useAppDispatch();

  return (
    <main>
      <h1
        onClick={() => dispatch(changeOnlineStatus())}
        style={{ background: statusColor }}
      >
        I am at {TextStatus} days {count}
      </h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch(changeTesxtstatus(e.target.value));
        }}
      />

      <div>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </main>
  );
};
