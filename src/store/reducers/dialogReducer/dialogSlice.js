import { createSlice } from '@reduxjs/toolkit';

import { fetchDialog, postNewMessage } from './dialogAC';

const initialState = {
  messages: [],
  totalMessages: 0,
  selectedDialogId: null,
  messagesLoading: false,
  messagesError: '',

  newMessageLoading: false,
  newMessageError: '',
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setSelectedDialogId(state, action) {
      state.selectedDialogId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDialog.pending, (state) => {
      state.messagesLoading = true;
    });

    builder.addCase(fetchDialog.fulfilled, (state,action) => {
      state.messagesLoading = false;
      state.messagesError = '';
      state.messages = action.payload.items;
      state.totalMessages = action.payload.totalCount;
    });

    builder.addCase(fetchDialog.rejected, (state, action) => {
      state.messagesLoading = false;
      state.messagesError = action.payload;
    });

    builder.addCase(postNewMessage.pending, (state) => {
      state.newMessageLoading = true;
    });

    builder.addCase(postNewMessage.fulfilled, (state, action) => {
      state.newMessageLoading = false;
      state.newMessageError = '';
      state.messages.unshift(action.payload);
    });

    builder.addCase(postNewMessage.rejected, (state, action) => {
      state.newMessageLoading = false;
      state.newMessageError = action.payload;
    });
  },
});

export const { setSelectedDialogId } = dialogSlice.actions;
export const dialogReducer = dialogSlice.reducer;
