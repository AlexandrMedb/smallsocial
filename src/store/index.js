import { createStore, combineReducers } from "redux";

import { counterReducer } from "./number";
import { profileReducer } from "./profile";

const rootReducer = combineReducers({
  // collections: collectionsReducer,
  // cards: cardReducer,
  counter: counterReducer,
  profile: profileReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
