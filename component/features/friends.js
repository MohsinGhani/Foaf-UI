import { createSlice } from "@reduxjs/toolkit";

export const frinedsSlice = createSlice({
  name: "friends",
  initialState: {
    allfriend: null,
    freindRequest: null,
    allCloseFriend: null,
    closeFriendsRequest: null,
    allFamilyFriend: null,
    familyFriendRequest: null,
    closeConnection: null,
    familyConnection: null,
    allUser: null,
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
    allFamilyFriend: (state, action) => {
      state.allFamilyFriend = action.payload;
    },
    familyFriendRequest: (state, action) => {
      state.familyFriendRequest = action.payload;
    },
    closeConnection: (state, action) => {
      state.closeConnection = action.payload;
    },
    familyConnection: (state, action) => {
      state.familyConnection = action.payload;
    },

    allUser: (state, action) => {
      state.allUser = action.payload;
    },
  },
});

export const {
  allFriends,
  freindRequest,
  allCloseFriend,
  closeFriendsRequest,
  allFamilyFriend,
  familyFriendRequest,
  closeConnection,
  familyConnection,
  allUser,
} = frinedsSlice.actions;

export default frinedsSlice.reducer;
