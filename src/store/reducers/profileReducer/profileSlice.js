import { createSlice } from '@reduxjs/toolkit';

import { fetchProfile, putProfileStatus } from './profileAC';

const initialState = {
  profile: {},
  profileLoading: false,
  profileError: '',

  isUserProfile: false,
  statusSending: false,
  statusError: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsUserProfile(state, action) {
      state.isUserProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.profileLoading = true;
    });

    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profileLoading = false;
      state.profile = action.payload;
      state.profileError = '';
    });

    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.profileLoading = false;
      state.profileError = action.payload;
    });

    builder.addCase(putProfileStatus.pending, (state) => {
      state.statusSending = true;
    });

    builder.addCase(putProfileStatus.fulfilled, (state, action) => {
      state.statusSending = false;
      state.statusError = ''
      state.profile.status = action.payload;
    });
  },
});

export const { setIsUserProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
