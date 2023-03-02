import { createSlice } from '@reduxjs/toolkit';

import { fetchFollowItems, follow, unfollow } from './followAC';

const initialState = {
  followItems: [],
  totalFollowItemsCount: 0,
  followItemsLoading: false,
  followItemsError: '',

  followLoading: [],
};

const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {
    clearFollowItems(state) {
      state.followItems = [];
    },

    addFollowLoadingItem(state, action) {
      state.followLoading.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFollowItems.pending, (state) => {
      state.followItemsLoading = true;
    });

    builder.addCase(fetchFollowItems.fulfilled, (state, action) => {
      state.followItemsLoading = false;
      state.followItemsError = '';
      state.followItems = action.payload.items;
      state.totalFollowItemsCount = action.payload.totalCount;
    });

    builder.addCase(fetchFollowItems.rejected, (state, action) => {
      state.followItemsLoading = false;
      state.followItemsError = action.payload;
    });

    builder.addCase(follow.fulfilled, (state, action) => {
      state.followLoading = handleFolowLoading(state.followLoading, action);
      state.totalFollowItemsCount += 1;
      state.followItems.unshift(action.payload);
    });

    builder.addCase(follow.rejected, (state, action) => {
      state.followLoading = handleFolowLoading(state.followLoading, action);
    });

    builder.addCase(unfollow.fulfilled, (state, action) => {
      state.followLoading = handleFolowLoading(state.followLoading, action);
      state.totalFollowItemsCount -= 1;
      state.followItems = state.followItems.filter((item) => item.id !== +action.payload);
    });

    builder.addCase(unfollow.rejected, (state, action) => {
      state.followLoading = handleFolowLoading(state.followLoading, action);
    });
  },
});

export const {
  addFollowLoadingItem,
  clearFollowItems
} = followSlice.actions;

export const followReducer = followSlice.reducer;

export const handleFolowLoading = (state, action) => {
  let userId = action.payload;

  if (typeof userId !== 'number') {
    userId = action.payload.id;
  }

  return state.filter((item) => item !== userId);
};
