import { configureStore } from "@reduxjs/toolkit";
import authReducer, { checkForToken } from "./slices/authSlice";
import criteriaReducer, { fetchCriteriaList } from "./slices/criteriaSlice";
import projectReducer, { fetchProjectList } from "./slices/projectSlice";
import semesterReducer from "./slices/semesterSlice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    criteriaReducer: criteriaReducer,
    projectReducer: projectReducer,
    semesterReducer: semesterReducer,
  },
});

store.dispatch(checkForToken());
store.dispatch(fetchCriteriaList());
store.dispatch(fetchProjectList());
