import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./component/features/user";

export default configureStore({
  reducer: { user: userReducer },
});
