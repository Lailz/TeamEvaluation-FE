import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import decode from "jwt-decode";
import api from "../api";

const initialState = {
  user: null,
};

const setUser = (token) => {
  const user = decode(token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("token", token);
  return user;
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    try {
      const res = await api.post("signin/", user);
      const _user = setUser(res.data.token);
      return _user;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! Something went wrong");
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      await api.post("signup/", user);
      const res = await api.post("signin/", user);
      const _user = setUser(res.data.token);
      return _user;
    } catch (error) {
      thunkAPI.rejectWithValue("Oops! Something went wrong");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkForToken: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const currentTime = Date.now();
        const user = decode(token);
        console.log(
          "🚀 ~ file: authSlice.js ~ line 48 ~ currentTime",
          currentTime
        );
        console.log("🚀 ~ file: authSlice.js ~ line 48 ~ user.exp", user.exp);
        if (user.exp >= currentTime / 1000) {
          const user = setUser(token);
          state.user = user;
        } else {
          localStorage.removeItem("token");
        }
      }
    },
    signout: (state) => {
      state.user = null;
      delete api.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { checkForToken, signout } = authSlice.actions;

export default authSlice.reducer;
