import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import profileStatusReducer from "./slicers/Profile";
import chatListReducer from "./slicers/MessageList";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profileStatusSlice: profileStatusReducer,
    chatList: chatListReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
