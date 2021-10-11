const initialState = {
  onlineStatus: true,
  tesxtstatus: "Дома",
};

export const Change_Status = "Change_Status";

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Change_Status: {
      return state;
      // return {
      //   active: !state.active,
      // }
    }
    default: {
      return state;
    }
  }
};

//     changeTesxtstatus: (state, action: PayloadAction<string>) => {
//       state.tesxtstatus = action.payload;
//     },

// export const { changeOnlineStatus, changeTesxtstatus } =
//   profileStatusSlice.actions;

// export const selectOnlineStatus = (state) =>
//   state.profileStatusSlice.onlineStatus;
// export const selectTesxtstatus = (state) =>
//   state.profileStatusSlice.tesxtstatus;
