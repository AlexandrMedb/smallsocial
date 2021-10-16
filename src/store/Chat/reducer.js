import faker from "faker";
import { RandChats } from "../../features/RandChatList";

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
      return {
        ...state,
        [faker.address.city()]: [],
      };
    }
    case Remove_Chat: {
      const result = { ...state };
      delete result[action.payload];
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
