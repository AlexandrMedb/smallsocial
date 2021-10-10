import faker from "faker";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../../../interface/ChatInterfaces";

import { RandChatList } from "../../../features/RandChatList";
//interfaces
import { Message } from "../../../interface/ChatInterfaces";

const initialState: Array<Chat> = RandChatList();

export const chatListSlice = createSlice({
  name: "chatList",
  initialState,

  reducers: {
    addNewChat: (state, action: PayloadAction<string>) =>
      (state = [
        ...state,
        {
          name: action.payload,
          chatID: faker.datatype.uuid(),
          messageList: [],
        },
      ]),

    removeChat: (state, action: PayloadAction<string>) => {
      let ind = state.findIndex((el) => el.chatID === action.payload);
      if (ind !== -1) {
        state.splice(ind, 1);
      }
    },

    addMessageToChat: (
      state,
      action: PayloadAction<{
        chatID: string;
        message?: string;
      }>
    ) => {
      const message = {
        id: faker.datatype.uuid(),
        user: faker.name.findName(),
        avatar: faker.image.avatar(),
        lorem:
          action.payload.message === undefined ? "" : action.payload.message,
      };

      let ind = state.findIndex((el) => el.chatID === action.payload.chatID);
      if (ind !== -1) {
        state[ind].messageList = [message, ...state[ind].messageList];
      }
    },

    removeMessageFromChat: (state, action: PayloadAction<Message>) => {
      console.log(action.payload);
    },
  },
});

export const { addNewChat, removeChat, addMessageToChat } =
  chatListSlice.actions;

export default chatListSlice.reducer;
