import { createSlice } from "@reduxjs/toolkit";

import { fetchFollow } from "./followAC";

const initialState = {
  follow: [],
  totalCount: 0,
  loading: false,
  error: "",
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollow.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchFollow.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.follow = action.payload.items;
      state.totalCount = action.payload.totalCount;
    });

    builder.addCase(fetchFollow.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const followReducer = followSlice.reducer;
