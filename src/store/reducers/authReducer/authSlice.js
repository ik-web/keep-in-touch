import { createSlice } from "@reduxjs/toolkit";

import { fetchAuth, logout } from "./authAC";
import { getInitialUser } from "store/utils";

const initialState = {
  user: getInitialUser(),
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.user = getInitialUser();
    });

    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
      state.user = getInitialUser();
    });
  },
});

export const authReducer = authSlice.reducer;
