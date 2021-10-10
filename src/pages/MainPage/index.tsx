import React, { useState, useEffect, useCallback } from "react";

import faker from "faker";

import styles from "./index.module.scss";
import MessageCard from "../../components/MessageCard";
import MessageInput from "../../components/MessageInput";
import SideNavBar from "../../components/SideNavBar";

import Container from "@mui/material/Container";

import { RandChatList } from "../../features/RandChatList";

export const MainPage = () => {
  let ChatList = RandChatList();
  let randMessageList = ChatList[0].messageList;

  let ChatTitles = ChatList.map((el) => el.name);

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
        // console.log("bot");
      }
    }, 3000);
  }, [messageList, handleAddMessage]);

  return (
    <main className={styles.container}>
      <Container component="main" maxWidth="xs">
        <MessageInput handleSend={handleAddMessage}></MessageInput>
        {messageList.map((el) => (
          <MessageCard
            key={el.id}
            message={el.lorem}
            User={el.user}
            avatar={el.avatar}
          />
        ))}
        <SideNavBar ChatTitles={ChatTitles}></SideNavBar>
      </Container>
    </main>
  );
};
