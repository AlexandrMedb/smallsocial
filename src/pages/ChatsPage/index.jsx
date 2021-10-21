import React, { useState, useEffect, useMemo } from "react";
import { Route, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAllChats } from "../../store/Chat/selectors";
import { addNewChat } from "../../store/Chat/index";

import styles from "./index.module.scss";
import { MessageInput } from "../../components/MessageInput";
import { SideNavBar } from "../../components/SideNavBar";
import { MessageList } from "./components/MessageList";
import Container from "@mui/material/Container";

export const ChatPage = () => {
  const dispatch = useDispatch();

  const AllChatList = useSelector(getAllChats);

  const ChatTitles = useMemo(() => Object.keys(AllChatList), [AllChatList]);
  const ChatIDs = useMemo(() => Object.keys(AllChatList), [AllChatList]);

  const [messageList, setMessageList] = useState();

  const { chatId } = useParams();

  useEffect(() => {
    if (chatId) setMessageList(AllChatList[chatId]);
  }, [chatId, AllChatList]);

  return (
    <main className={styles.container}>
      <Container component="main" maxWidth="xs">
        <h1>{chatId}</h1>
        <h1 onClick={() => dispatch(addNewChat("lef"))}>add Chat</h1>
        <MessageInput currentChat={chatId}></MessageInput>

        <Route path="/">
          <MessageList messageList={messageList} />
        </Route>

        <SideNavBar ChatTitles={ChatTitles} ChatIDs={ChatIDs}></SideNavBar>
      </Container>
    </main>
  );
};
