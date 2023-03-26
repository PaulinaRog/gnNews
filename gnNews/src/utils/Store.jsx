import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "../utils/Slice";

const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
