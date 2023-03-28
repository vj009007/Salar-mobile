/** @format */

import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import stateSlice from "../layout/redux/stateSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    state: stateSlice,
  },
});
