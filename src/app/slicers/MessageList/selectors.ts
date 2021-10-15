import { RootState } from "../../store";

export const selectChat = (index: number) => (state: RootState) =>
  state.chatList[index];

export const selectAllChats = (state: RootState) => state.chatList;
