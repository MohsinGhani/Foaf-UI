import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./component/features/user";
import friendReducer from "./component/features/friends";
import searchReducer from "./component/features/search";
import CreateSlice from "./component/features/Create";
import articleData from "./component/features/articleData";

export default configureStore({
  reducer: {
    user: userReducer,
    freinds: friendReducer,
    search: searchReducer,
    create: CreateSlice,
    article: articleData,
  },
});
