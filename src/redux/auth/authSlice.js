import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import config from "../../config";

const initialState = {
  isAuthenticated: false,
  user: {},
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUserSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    authUserFailure(state, action) {
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    logoutUserSuccess(state, action) {
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
  },
});

export const { authUserSuccess, authUserFailure, logoutUserSuccess } =
  authSlice.actions;

export default authSlice.reducer;
export const authUser = (phone, password,setErrorMessage) => async (dispatch) => {
  try {
    const response = await axios.post(`${config.apiUrl}/auth/login/`, {
      phone,
      password,
    })
    .catch((error) => {
      setErrorMessage(error.response.data);
      console.log(error.response.data);
    });
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("profile",JSON.stringify(response.data) );

    dispatch(authUserSuccess(user));
  } catch (error) {
    dispatch(authUserFailure(error.response.data));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token","profile");
  dispatch(logoutUserSuccess());
};
