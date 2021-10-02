import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Profile {
  onlineStatus: boolean;
  tesxtstatus: string;
}

const initialState: Profile = {
  onlineStatus: true,
  tesxtstatus: "Дома",
};

export const profileStatusSlice = createSlice({
  name: "profileStatusSlice",
  initialState,

  reducers: {
    changeOnlineStatus: (state) => {
      state.onlineStatus = !state.onlineStatus;
    },

    changeTesxtstatus: (state, action: PayloadAction<string>) => {
      state.tesxtstatus = action.payload;
    },
  },
});

export const { changeOnlineStatus, changeTesxtstatus } =
  profileStatusSlice.actions;

export const selectOnlineStatus = (state: RootState) =>
  state.profileStatusSlice.onlineStatus;
export const selectTesxtstatus = (state: RootState) =>
  state.profileStatusSlice.tesxtstatus;

export default profileStatusSlice.reducer;
