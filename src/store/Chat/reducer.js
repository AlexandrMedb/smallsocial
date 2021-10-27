import faker from "faker";
import { RandChats } from "../../features/RandChatList";

import { chats } from "../../services/firebase";

import {
  Add_New_Message,
  Remove_Chat,
  Add_New_Chat,
  Remove_Message,
} from "./actions";

const initialState = RandChats();

export const chatListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_New_Chat: {
      let chatName = faker.address.city();
      chats.push({ chatName: chatName, message: {} });
      return {
        ...state,
        [chatName]: [],
      };
    }
    case Remove_Chat: {
      const result = { ...state };
      delete result[action.payload];
      chats.child(action.payload).remove();
      return result;
    }
    case Add_New_Message: {
      const message = {
        id: faker.datatype.uuid(),
        user: faker.name.findName(),
        avatar: faker.image.avatar(),
        lorem:
          action.payload.message === undefined ? "" : action.payload.message,
      };

      const result = { ...state };
      result[action.payload.chatID] = [
        message,
        ...result[action.payload.chatID],
      ];

      return result;
    }

    case Remove_Message: {
      return state;
    }
    default: {
      return state;
    }
  }
};
