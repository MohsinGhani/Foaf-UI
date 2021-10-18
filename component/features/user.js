import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { login: null, userDetailes: null },
  reducers: {
    loginData: (state, action) => {
      state.login = action.payload;
    },
    userDetailes: (state, action) => {
      state.userDetailes = action.payload;
    },
  },
});

export const { loginData, userDetailes } = userSlice.actions;

export default userSlice.reducer;
