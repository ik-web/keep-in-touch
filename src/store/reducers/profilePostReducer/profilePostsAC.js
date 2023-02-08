import { createAsyncThunk } from '@reduxjs/toolkit';

import { postAPI } from 'services';

export const fetchProfilePosts = createAsyncThunk(
  'profilePosts/fetchProfilePosts',
  async (id, thunkAPI) => {
    try {
      const response = await postAPI.fetchProfilePosts(id);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error('404 not found');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postNewPost = createAsyncThunk(
  'profilePosts/postNewPost',
  async (newPost, thunkAPI) => {
    try {
      const response = await postAPI.postNewPost(newPost.text);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
