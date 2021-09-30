import React, { useState } from "react";
import styles from "./index.module.scss";

interface message {
  message: string;
  User?: string;
  age?: number;
  logined?: boolean;
}

export const Message = (props: message) => {
  const [color, setColor] = useState("");

  return (
    <div className={styles.message}>
      <h1>Message</h1>
      <div className={styles.data}>
        <p>Пользователь: {props.User} </p>
        <p>{props.message} </p>
        <p>{props.age} лет </p>
      </div>
      <p
        className={styles.line}
        onClick={() => {
          setColor(`#${(+color.slice(1) + 20) % 999}`);
        }}
        style={{ backgroundColor: color }}
      ></p>
    </div>
  );
};
