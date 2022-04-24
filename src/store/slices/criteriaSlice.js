import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  criterias: [],
  loading: true,
};

export const fetchCriteriaList = createAsyncThunk(
  "criteria/list",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/criterias");
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const createCriteria = createAsyncThunk(
  "criteria/create",
  async ({ criteria, handleSnackBarOpen, handleClose }, thunkAPI) => {
    try {
      const res = await api.post("/criterias", criteria);
      handleSnackBarOpen();
      handleClose();
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const criteriaSlice = createSlice({
  name: "criteria",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCriteriaList.fulfilled, (state, action) => {
      state.criterias = action.payload;
      state.loading = false;
    });
    builder.addCase(createCriteria.fulfilled, (state, action) => {
      state.criterias = [...state.criterias, action.payload];
    });
  },
});

export default criteriaSlice.reducer;
