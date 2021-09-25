import React, { useState, useMemo, useEffect, useCallback } from "react";

import faker from "faker";

import styles from "./index.module.scss";
import MessageCard from "../../components/MessageCard";
import MessageInput from "../../components/MessageInput";

export const MainPage = () => {
  const RandMessage = () => ({
    id: faker.datatype.uuid(),
    user: faker.name.findName(),
    avatar: faker.image.avatar(),
    lorem: faker.lorem.text(),
  });

  const randMessageList = useMemo(() => {
    let resulet = Array.from({ length: 11 }).map(RandMessage);
    return resulet;
  }, []);

  const [messageList, setMessageList] = useState(randMessageList);

  const handleAddMessage = useCallback(
    (messageText: string, bot?: boolean) => {
      const message = {
        id: faker.datatype.uuid(),
        user: faker.name.findName(),
        avatar: faker.image.avatar(),
        lorem: messageText,
      };

      if (bot) {
        message.lorem = `Чем я могу помочь ? ${messageList[0].user}`;
        message.user = "bot";
      }

      setMessageList(() => [message, ...messageList]);

      return message;
    },
    [messageList]
  );

  useEffect(() => {
    setTimeout(() => {
      if (messageList[0].user !== "bot") {
        handleAddMessage("", true);
      } else {
        console.log("bot");
      }
    }, 3000);
  }, [messageList, handleAddMessage]);

  return (
    <main className={styles.container}>
      <MessageInput handleSend={handleAddMessage}></MessageInput>
      {messageList.map((el) => (
        <MessageCard
          key={el.id}
          message={el.lorem}
          User={el.user}
          avatar={el.avatar}
        />
      ))}
    </main>
  );
};
