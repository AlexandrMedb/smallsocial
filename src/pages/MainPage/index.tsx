import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Route, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

import { selectAllChats } from "./reducer";

import faker from "faker";

import styles from "./index.module.scss";
import MessageInput from "../../components/MessageInput";
import SideNavBar from "../../components/SideNavBar";
import { MessageList } from "./components/MessageList";
import Container from "@mui/material/Container";

export const MainPage = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const ChatList = useAppSelector(selectAllChats);
  const ChatIndex = useMemo(() => {
    let result = ChatList.findIndex((el) => {
      if (el.name === chatId) {
        return true;
      }
      return false;
    });
    if (result !== -1) {
      return result;
    }
    return 0;
  }, [ChatList, chatId]);

  const ChatTitles = useMemo(() => {
    return ChatList.map((el) => el.name);
  }, [ChatList]);

  const [messageList, setMessageList] = useState(ChatList[0].messageList);

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

      setMessageList((messageList) => [message, ...messageList]);

      return message;
    },
    [messageList]
  );

  useEffect(() => {
    setTimeout(() => {
      if (messageList) {
        if (messageList[0].user !== "bot") {
          handleAddMessage("", true);
        } else {
          // console.log("bot");
        }
      }
    }, 1000);
  }, [messageList, handleAddMessage]);

  useEffect(() => {
    if (ChatIndex !== -1) {
      setMessageList(() => ChatList[ChatIndex].messageList);
    }
  }, [ChatIndex, ChatList]);

  return (
    <main className={styles.container}>
      <Container component="main" maxWidth="xs">
        <h1>{chatId}</h1>
        <MessageInput handleSend={handleAddMessage}></MessageInput>

        <Route path="/">
          <MessageList messageLi={messageList} />
        </Route>

        <SideNavBar ChatTitles={ChatTitles}></SideNavBar>
      </Container>
    </main>
  );
};
