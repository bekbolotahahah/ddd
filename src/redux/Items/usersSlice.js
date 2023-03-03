import { createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios_config';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('/api/v1/auth/users/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    dispatch(getUsersSuccess(response.data));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  }
};

export default usersSlice.reducer;

