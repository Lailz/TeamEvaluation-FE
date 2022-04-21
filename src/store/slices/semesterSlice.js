import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  semesters: [],
  loading: true,
};

export const semesterListFetch = createAsyncThunk(
  "semester/list",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/semesters");
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const createSemester = createAsyncThunk(
  "semester/create",
  async (semester, thunkAPI) => {
    try {
      const res = await api.post("/semesters/create", semester);
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const semesterSlice = createSlice({
  name: "semester",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(semesterListFetch.fulfilled, (state, action) => {
      state.semesters = action.payload;
      state.loading = false;
    });
    builder.addCase(createSemester.fulfilled, (state, action) => {
      state.semesters = [action.payload, ...state.semesters];
    });
  },
});

// export const {  } = semesterSlice.actions;

export default semesterSlice.reducer;
