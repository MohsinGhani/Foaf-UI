import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
  name: "article",
  initialState: { data: null },
  reducers: {
    article: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { article } = CreateSlice.actions;

export default CreateSlice.reducer;
