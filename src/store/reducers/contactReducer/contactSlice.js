import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts } from "./contactAC";

const initialState = {
  contacts: [],
  totalContacts: 0,
  contactsLoading: false,
  contactsError: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.contactsLoading = true;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contactsLoading = false;
      state.contactsError = '';
      state.contacts = action.payload.items;
      state.totalContacts = action.payload.totalCount;
    });

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contactsLoading = false;
      state.contactsError = action.payload;
    });
  }
});

export const contactReducer = contactSlice.reducer;
