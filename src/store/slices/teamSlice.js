import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  teams: [],
  loading: true,
};

export const fetchTeamList = createAsyncThunk(
  "team/list",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("teams/");
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const createTeam = createAsyncThunk(
  "team/create",
  async ({ project, team, handleClose }, thunkAPI) => {
    try {
      const res = await api.post(`projects/${project.id}/teams/`, team);
      handleClose();
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! something went wrong.");
    }
  }
);

export const teamSlice = createSlice({
  name: "team",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTeamList.fulfilled, (state, action) => {
      state.teams = action.payload;
      state.loading = false;
    });
    builder.addCase(createTeam.fulfilled, (state, action) => {
      state.teams.push(action.payload);
    });
  },
});

export default teamSlice.reducer;
