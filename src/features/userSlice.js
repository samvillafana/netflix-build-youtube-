import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
const { login, logout } = userSlice.actions;
const selectUser = (state) => state.user.user;
const userReducer = userSlice.reducer;
export {
  login,
  logout,
  selectUser,
  userReducer
}
