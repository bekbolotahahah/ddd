import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/register/registerUser";

import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    password: "",
    first_name: "",
    last_name: "",
    avatar: "",
    phone: "",
    email: "",
    group: "",
    code: "",
    point: "",
    role: "",
    last_activity: "",
    password_confirm: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFile = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-full">
          <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Register
            </h1>

            <form onSubmit={handleSubmit}>
              {" "}
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="почта"
                  type="file"
                  name="avatar"
                  multiple
                  // value={userData.avatar}
                  onChange={handleFile}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="пароль"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="имя"
                  type="text"
                  name="first_name"
                  value={userData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="фамилия"
                  type="text"
                  name="last_name"
                  value={userData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="номер тел"
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="почта"
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="груп"
                  type="text"
                  name="group"
                  value={userData.group}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="поинт"
                  type="number"
                  name="point"
                  value={userData.point}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="роль"
                  type="text"
                  name="role"
                  value={userData.role}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="дата"
                  type={"date"}
                  name="last_activity"
                  value={userData.last_activity}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="пароль"
                  type="password"
                  name="password_confirm"
                  value={userData.password_confirm}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <input
                  className="m-1 p-3 w-full rounded-md "
                  placeholder="Code"
                  type="text"
                  name="code"
                  value={userData.code}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 rounded-md w-full">
                <button
                  className="block w-full px-4 py-4 mt-10 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>

            <hr className="my-8" />

            <p className="mt-4">
              <a
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                href="./forgot-password.html"
              >
                Forgot your password?
              </a>
            </p>
            <p className="mt-1">
              <Link
                to={"/login"}
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                href="./create-account.html"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
