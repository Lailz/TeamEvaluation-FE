import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  projects: [],
  loading: true,
};

export const fetchProjectList = createAsyncThunk(
  "project/list",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/projects/");
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const createProject = createAsyncThunk(
  "project/create",
  async ({ semester, project, handleClose }, thunkAPI) => {
    try {
      const res = await api.post(
        `/semesters/${semester.id}/projects/`,
        project
      );
      handleClose();
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProjectList.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
  },
});

// export const {  } = semesterSlice.actions;

export default projectSlice.reducer;
