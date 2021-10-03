import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Chat } from "../../interface/ChatInterfaces";

import { RandChatList } from "../../features/RandChatList";

const initialState: Array<Chat> = RandChatList();

export const chatListSlice = createSlice({
  name: "chatList",
  initialState,

  reducers: {
    // changeOnlineStatus: (state) => {
    //   state.onlineStatus = !state.onlineStatus;
    // },
    // changeTesxtstatus: (state, action: PayloadAction<string>) => {
    //   state.tesxtstatus = action.payload;
    // },
  },
});

export const selectChat = (index: number) => (state: RootState) =>
  state.chatList[index];

export const selectAllChats = (state: RootState) => state.chatList;

export default chatListSlice.reducer;
