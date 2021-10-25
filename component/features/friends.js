import { createSlice } from "@reduxjs/toolkit";

export const frinedsSlice = createSlice({
  name: "friends",
  initialState: {
    allfriend: null,
    freindRequest: null,
    allCloseFriend: null,
    closeFriendsRequest: null,
  },
  reducers: {
    allFriends: (state, action) => {
      state.allfriend = action.payload;
    },
    freindRequest: (state, action) => {
      state.freindRequest = action.payload;
    },
    allCloseFriend: (state, action) => {
      state.allCloseFriend = action.payload;
    },
    closeFriendsRequest: (state, action) => {
      state.closeFriendsRequest = action.payload;
    },
  },
});

export const {
  allFriends,
  freindRequest,
  closeFriendsRequest,
  allCloseFriend,
} = frinedsSlice.actions;

export default frinedsSlice.reducer;
