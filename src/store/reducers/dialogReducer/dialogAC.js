import { createAsyncThunk } from '@reduxjs/toolkit';

import { dialogAPI } from 'services/dialogAPI';

export const fetchDialog = createAsyncThunk(
  'dialog/fetchDialog',
  async (dialogId, thunkAPI) => {
    try {
      const response = await dialogAPI.fetchDialog(dialogId);

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

export const postNewMessage = createAsyncThunk(
  'dialog/postNewMessage',
  async (newMessageInfo, thunkAPI) => {
    try {
      const response = await dialogAPI.postNewMessage(newMessageInfo);
      
      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error('Something went wrong')
      }
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
