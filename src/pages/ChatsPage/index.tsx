import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Route, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { selectAllChats } from "../../app/slicers/MessageList/selectors";
import { addNewChat } from "../../app/slicers/MessageList";

import faker from "faker";

import styles from "./index.module.scss";
import MessageInput from "../../components/MessageInput";
import SideNavBar from "../../components/SideNavBar";
import { MessageList } from "./components/MessageList";
import Container from "@mui/material/Container";

export const ChatPage = () => {
  const dispatch = useAppDispatch();

  const { chatId } = useParams<{ chatId: string }>();
  const ChatList = useAppSelector(selectAllChats);

  const ChatIndex = useMemo(() => {
    let result = ChatList.findIndex((el) => {
      if (el.chatID === chatId) {
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

  const ChatIDs = useMemo(() => {
    return ChatList.map((el) => el.chatID);
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
      if (messageList[0]) {
        if (messageList[0].user !== "bot") {
          handleAddMessage("", true);
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
        <h1 onClick={() => dispatch(addNewChat("lef"))}>add Chat</h1>
        <MessageInput currentChat={chatId}></MessageInput>

        <Route path="/">
          <MessageList messageLi={messageList} />
        </Route>

        <SideNavBar ChatTitles={ChatTitles} ChatIDs={ChatIDs}></SideNavBar>
      </Container>
    </main>
  );
};
