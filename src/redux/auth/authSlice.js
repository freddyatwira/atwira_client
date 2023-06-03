import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user") || null);
export const loginUser = createAsyncThunk(
  "users/login",
  async (inputs, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://atwira-server1.onrender.com/auth/login",
        inputs
      );
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    logout: (state) => {
      state.user = localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.user = action.payload),
          (state.isSuccess = true);
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.user = null),
          (state.isError = true),
          (state.message = action.payload);
      });
  },
});

// export const selectAll = (state) => state.auth;

export const { reset, logout } = authSlice.actions;

export default authSlice.reducer;
