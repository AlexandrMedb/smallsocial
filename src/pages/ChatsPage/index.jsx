import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Route, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAllChats, selectChat } from "../../store/MessageList/selectors";
import { addNewChat } from "../../store/MessageList/index";

import faker from "faker";

import styles from "./index.module.scss";
import MessageInput from "../../components/MessageInput";
import SideNavBar from "../../components/SideNavBar";
import { MessageList } from "./components/MessageList";
import Container from "@mui/material/Container";

export const ChatPage = () => {
  const dispatch = useDispatch();

  const AllChatList = useSelector(getAllChats);

  const ChatIDs = Object.keys(AllChatList);
  const ChatTitles = ChatIDs;

  const [messageList, setMessageList] = useState(AllChatList[ChatIDs[0]]);

  // const { chatId } = useParams(AllChatList[0].chatID);

  // const ChatIndex = useMemo(() => {
  //   let result = AllChatList.findIndex((el) => {
  //     if (el.chatID === chatId) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   if (result !== -1) {
  //     return result;
  //   }
  //   return 0;
  // }, [AllChatList, chatId]);

  // const chat = useSelector(selectChat(ChatIndex));

  // const handleAddMessage = useCallback(
  //   (messageText, bot) => {
  //     const message = {
  //       id: faker.datatype.uuid(),
  //       user: faker.name.findName(),
  //       avatar: faker.image.avatar(),
  //       lorem: messageText,
  //     };

  //     if (bot) {
  //       message.lorem = `Чем я могу помочь ? ${messageList[0].user}`;
  //       message.user = "bot";
  //     }

  //     setMessageList((messageList) => [message, ...messageList]);

  //     return message;
  //   },
  //   [messageList]
  // );

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (messageList[0]) {
  //       if (messageList[0].user !== "bot") {
  //         handleAddMessage("", true);
  //       }
  //     }
  //   }, 1000);
  // }, [messageList, handleAddMessage]);

  // useEffect(() => {
  //   if (ChatIndex !== -1) {
  //     setMessageList(() => AllChatList[ChatIndex].messageList);
  //   }
  // }, [ChatIndex, AllChatList]);

  return (
    <main className={styles.container}>
      <Container component="main" maxWidth="xs">
        {/* <h1>{chatId}</h1> */}
        <h1 onClick={() => dispatch(addNewChat("lef"))}>add Chat</h1>
        {/* <MessageInput currentChat={chatId}></MessageInput> */}

        <Route path="/">
          <MessageList messageLi={messageList} />
        </Route>

        <SideNavBar ChatTitles={ChatTitles} ChatIDs={ChatIDs}></SideNavBar>
      </Container>
    </main>
  );
};
