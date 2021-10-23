import { createSlice } from "@reduxjs/toolkit";

export const frinedsSlice = createSlice({
  name: "friends",
  initialState: {
    allfriend: null,
    freindRequest: null,
    closeFriendsRequest: null,
  },
  reducers: {
    allFriends: (state, action) => {
      state.allfriend = action.payload;
    },
    freindRequest: (state, action) => {
      state.freindRequest = action.payload;
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
} = frinedsSlice.actions;

export default frinedsSlice.reducer;
