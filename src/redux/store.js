import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reduser";
import authReducer from "./auth/authSlice";
import registerReducer from './register/registrationSlice'
import usersReducer from './Items/usersSlice';
import searchReducer from './search/serchSlice';
const store = configureStore({
  reducer: rootReducer,
  auth: authReducer,
  registerSlice: registerReducer,
  users: usersReducer,
  search: searchReducer,
  middleware: [thunkMiddleware],
});

export default store;

// password,
// first_name,
// last_name,
// phone,
// email,
// group,
// point,
// role,
// last_activity,
// password_confirm;
