import { createSlice } from "@reduxjs/toolkit";

export const frinedsSlice = createSlice({
  name: "friends",
  initialState: { allfriend: null, freindRequest: null },
  reducers: {
    allFriends: (state, action) => {
      state.user.friend = action.payload;
    },
    freindRequest: (state, action) => {
      state.user.freindRequest = action.payload;
    },
  },
});

export const { allFriends, freindRequest } = frinedsSlice.actions;

export default frinedsSlice.reducer;
