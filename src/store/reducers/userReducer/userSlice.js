import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './userAC';

const initialState = {
  users: [],
  usersLoading: false,
  usersCount: 0,
  usersError: '',

  totalPages: 0,
  currentPage: 1,
  usersOnPageLimit: 12,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersLoading = false;
      state.usersError = '';
      state.usersCount = action.payload.totalCount;
      state.totalPages = Math.ceil(action.payload.totalCount / state.usersOnPageLimit);
      state.users =  action.payload.items;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.usersLoading = false;
      state.usersError = action.payload;
    });
  },
});

export const {
  setCurrentPage
} = userSlice.actions;

export const userReducer = userSlice.reducer;
