import React from "react";
import { Message } from "../../components/Message";

import styles from "./index.module.scss";
export const MainPage = () => {
  const message = {
    user: "Luba",
    logined: true,
    age: 46,
  };
  return (
    <main className={styles.container}>
      <Message
        message="Меня трудно найти и легко по.."
        age={message.age}
        User={message.user}
        logined={message.logined}
      ></Message>
    </main>
  );
};
