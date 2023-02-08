import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsAPI } from 'services';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await contactsAPI.fetchContacts();

      if (response.statusCode === 200) {
        return response.data;
      } else {
        throw new Error("404 not found");
      }
    } catch(error) {
      console.log('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
