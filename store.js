import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./component/features/user";
import friendReducer from "./component/features/friends";
import searchReducer from "./component/features/search";

export default configureStore({
  reducer: { user: userReducer, freinds: friendReducer, search: searchReducer },
});
