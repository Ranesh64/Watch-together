import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showDialog: false,
    showChat: false,
    username: "",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    showDialog: (state) => {
      state.showDialog = !state.showDialog;
    },
    showChat: (state, action) => {
      state.showChat = !state.showChat;
      state.username = action.payload;
    },
  },
});

export const { toggleMenu, showDialog, showChat } = appSlice.actions;
export default appSlice.reducer;
