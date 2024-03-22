import { configureStore } from "@reduxjs/toolkit";
import course from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    course,
  }
})