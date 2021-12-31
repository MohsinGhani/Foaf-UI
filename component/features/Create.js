import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
  name: "Create",
  initialState: { video: null },
  reducers: {
    videoStatus: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { videoStatus } = CreateSlice.actions;

export default CreateSlice.reducer;
