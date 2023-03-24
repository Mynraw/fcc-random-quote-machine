import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./quoteSlice";

export default configureStore({
  reducer: {
    card: cardReducer,
  },
});
