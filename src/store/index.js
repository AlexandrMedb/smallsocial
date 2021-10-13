import { createStore, combineReducers } from "redux";
import { chatListReducer } from "./MessageList";

import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
  // collections: collectionsReducer,
  // cards: cardReducer,

  profile: profileReducer,
  chatList: chatListReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
