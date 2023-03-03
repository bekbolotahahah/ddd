import { registerUserStart, registerUserSuccess, registerUserFailure } from './registrationSlice';
import axios from '../../api/axios_config';

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerUserStart());
  try {
    const response = await axios.post('/api/v1/auth/register/', userData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
    });
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    dispatch(registerUserFailure(error.response.data));
  }
};
