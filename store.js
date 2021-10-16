import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./component/features/user";
import friendReducer from "./component/features/friends";

export default configureStore({
  reducer: { user: userReducer, freinds: friendReducer },
});
