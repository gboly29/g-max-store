import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/Cart/cartslice";
import userReducer from "./features/user/userslice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
