import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(phoneNumber, password);
    dispatch(authUser(phoneNumber, password, setErrorMessage)).then(() => {
      setErrorMessage("");
      if (localStorage.getItem("token")) {
        navigate("/");
      }
    });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-full">
          <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="phone-number-input" className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  className="block w-full p-4 rounded-md mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Jane Doe"
                  type="text"
                  id="phone-number-input"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </label>
              <div className=" text-red-600 font-thin m-1">{errorMessage?.phone}</div>
              <label htmlFor="password-input" className="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Password</span>
                <input
                  className="block w-full p-4 rounded-md mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="***************"
                  type="password"
                  id="password-input"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <div className=" text-red-600 font-thin m-1">{errorMessage?.password}</div>
              <button
                type="submit"
                className="block w-full px-4 py-4 mt-10 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Log in
              </button>
            </form>

            <hr className="my-8" />

           
            <p className="mt-1">
              <Link
                to="/register"
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                href="./create-account.html"
              >
                Create account
              </Link>
            </p>

            <div className=" text-red-600 font-thin m-1">{errorMessage?.login}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
