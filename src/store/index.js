import { configureStore } from "@reduxjs/toolkit";
import authReducer, { checkForToken } from "./slices/authSlice";
import criteriaReducer, { fetchCriteriaList } from "./slices/criteriaSlice";
import semesterReducer from "./slices/semesterSlice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    criteriaReducer: criteriaReducer,
    semesterReducer: semesterReducer,
  },
});

store.dispatch(checkForToken());
store.dispatch(fetchCriteriaList());
