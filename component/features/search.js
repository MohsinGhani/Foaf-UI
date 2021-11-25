import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: { allSearch: null, loader: false },
  reducers: {
    allSearch: (state, action) => {
      state.loader = true;
      state.allSearch = action.payload;
    },
    loader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { allSearch, loader } = searchSlice.actions;

export default searchSlice.reducer;
