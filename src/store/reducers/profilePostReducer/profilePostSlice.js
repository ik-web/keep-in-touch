import { createSlice } from "@reduxjs/toolkit";

import { fetchProfilePosts, postNewPost } from "./profilePostsAC";

const initialState = {
  posts: [],
  totalPosts: 0,
  postsLoading: false,
  postsError: "",
  newPostSending: false,
  newPostError: "",
};

export const profilePostSlice = createSlice({
  name: "profilePostsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfilePosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProfilePosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload.items;
      state.totalPosts = action.payload.totalCount;
    });

    builder.addCase(fetchProfilePosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(postNewPost.pending, (state) => {
      state.newPostSending = true;
    });

    builder.addCase(postNewPost.fulfilled, (state, action) => {
      state.newPostSending = false;
      state.newPostError = "";
      state.posts.unshift(action.payload);
      state.totalPosts += 1;
    });

    builder.addCase(postNewPost.rejected, (state, action) => {
      state.newPostSending = false;
      state.newPostError = action.payload;
    });
  },
});

export const profilePostReducer = profilePostSlice.reducer;
