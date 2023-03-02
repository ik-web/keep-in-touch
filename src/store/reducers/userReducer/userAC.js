import { createAsyncThunk } from "@reduxjs/toolkit";

import { userAPI } from "services";

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (page, thunkAPI) => {
    try {
      const response = await userAPI.fetchUsers(page);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error('404 not found')
      }
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);