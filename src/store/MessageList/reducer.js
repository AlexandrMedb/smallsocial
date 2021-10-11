import faker from "faker";

import { RandChatList } from "../../../features/RandChatList";

const initialState = RandChatList();

export const chatListReducer = (state = initialState, action) => {
  switch (action.type) {
    // case Change_OnlineStatus: {
    //   console.log(state);
    //   return {
    //     ...state,
    //     onlineStatus: !state.onlineStatus,
    //   };
    // }
    // case Change_TextStatus: {
    //   return {
    //     ...state,
    //     tesxtstatus: action.payload,
    //   };
    // }
    default: {
      return state;
    }
  }
};

//   reducers: {
//     addNewChat: (state, action: PayloadAction<string>) =>
//       (state = [
//         ...state,
//         {
//           name: action.payload,
//           chatID: faker.datatype.uuid(),
//           messageList: [],
//         },
//       ]),

//     removeChat: (state, action: PayloadAction<string>) => {
//       let ind = state.findIndex((el) => el.chatID === action.payload);
//       if (ind !== -1) {
//         state.splice(ind, 1);
//       }
//     },

//     addMessageToChat: (
//       state,
//       action: PayloadAction<{
//         chatID: string;
//         message?: string;
//       }>
//     ) => {
//       const message = {
//         id: faker.datatype.uuid(),
//         user: faker.name.findName(),
//         avatar: faker.image.avatar(),
//         lorem:
//           action.payload.message === undefined ? "" : action.payload.message,
//       };

//       let ind = state.findIndex((el) => el.chatID === action.payload.chatID);
//       if (ind !== -1) {
//         state[ind].messageList = [message, ...state[ind].messageList];
//       }
//     },

//     removeMessageFromChat: (state, action: PayloadAction<Message>) => {
//       console.log(action.payload);
//     },
//   },
// });

// export const { addNewChat, removeChat, addMessageToChat } =
//   chatListSlice.actions;
