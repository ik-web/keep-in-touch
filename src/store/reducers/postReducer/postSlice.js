import { createSlice } from "@reduxjs/toolkit";

import { fetchAllPosts } from "./postAC";

const initialState = {
  posts: [],
  totalCount: 0,
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload.items;
      state.totalCount = action.payload.totalCount;
    });

    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const postReducer = postSlice.reducer;
