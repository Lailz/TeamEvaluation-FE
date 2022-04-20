import { configureStore } from "@reduxjs/toolkit";
import authReducer, { checkForToken } from "./slices/authSlice";
import semesterReducer from "./slices/semesterSlice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    semesterReducer: semesterReducer,
  },
});

store.dispatch(checkForToken());
