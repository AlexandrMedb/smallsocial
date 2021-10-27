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

import { chats } from "../../services/firebase";

export const ChatPage = () => {
  const dispatch = useDispatch();

  const AllChatList = useSelector(getAllChats);

  const [chatsDataBase, setChatsDataBase] = useState();

  const [chatIDsDataBase, srtChatIDsDataBase] = useState();

  const [chatTitlesDataBase, setChatTitlesDataBase] = useState();

  // const ChatTitles = useMemo(() => Object.keys(AllChatList), [AllChatList]);
  // const ChatIDs = useMemo(() => Object.keys(AllChatList), [AllChatList]);

  const [messageList, setMessageList] = useState();

  const { chatId } = useParams();

  useEffect(() => {
    if (chatId) setMessageList(AllChatList[chatId]);
  }, [chatId, AllChatList]);

  useEffect(() => {
    const ChatIDs = [];
    const ChatTitles = [];
    chats.on("value", async (snapshot) => {
      let data = await snapshot.val();
      setChatsDataBase(data);

      for (let key in data) {
        ChatIDs.push(key);

        ChatTitles.push(data[key].chatName);
      }

      srtChatIDsDataBase(ChatIDs);
      setChatTitlesDataBase(ChatTitles);
    });
  }, []);

  useEffect(() => {
    if (chatId) {
      const MessObg = chatsDataBase[chatId].messages;

      let list = [];
      for (let key in MessObg) {
        list.push(MessObg[key]);
      }
      console.log(list);
    }
  }, [chatId, chatsDataBase]);

  return (
    <main className={styles.container}>
      <Container component="main" maxWidth="xs">
        <h1>{chatId}</h1>
        <h1 onClick={() => dispatch(addNewChat("lef"))}>add Chat</h1>
        <MessageInput currentChat={chatId}></MessageInput>

        <Route path="/">
          <MessageList messageList={messageList} />
        </Route>

        <SideNavBar
          ChatTitles={chatTitlesDataBase}
          ChatIDs={chatIDsDataBase}
        ></SideNavBar>
      </Container>
    </main>
  );
};
