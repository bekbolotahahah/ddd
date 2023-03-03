import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
    searchQuery: ''
  },
  reducers: {
    getUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    }
  }
});

export const { getUsersStart, getUsersSuccess, getUsersFailure, setSearchQuery } = usersSlice.actions;

export default usersSlice.reducer;
