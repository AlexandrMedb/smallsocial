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
      console.log(state);

      return [
        ...state,
        {
          name: action.payload,
          chatID: faker.datatype.uuid(),
          messageList: [],
        },
      ];
    }
    case Remove_Chat: {
      let ind = state.findIndex((el) => el.chatID === action.payload);
      if (ind !== -1) {
        let result = state.filter((el, i) => i !== ind);
        return result;
      }
      return state;
    }
    case Add_New_Message: {
      const message = {
        id: faker.datatype.uuid(),
        user: faker.name.findName(),
        avatar: faker.image.avatar(),
        lorem:
          action.payload.message === undefined ? "" : action.payload.message,
      };

      let ind = state.findIndex((el) => el.chatID === action.payload.chatID);
      console.log(ind);
      if (ind !== -1) {
        let result = state;
        result[ind].messageList = [message, ...state[ind].messageList];
        console.log(result);
        return result;
      }
      return state;
    }

    case Remove_Message: {
      return state;
    }
    default: {
      return state;
    }
  }
};
