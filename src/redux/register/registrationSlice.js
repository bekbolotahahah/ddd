import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const registerSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    registerUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerUserStart, registerUserSuccess, registerUserFailure } = registerSlice.actions;

export default registerSlice.reducer;
