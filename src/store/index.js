import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import semesterReducer from "./slices/semesterSlice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    semesterReducer: semesterReducer,
  },
});
