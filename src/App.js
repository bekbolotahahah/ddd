import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Home";

import Register from "./pages/Register";
import LoginComponent from "./pages/LoginComponent";
import MainLyout from "./layout/MainLyout";
import UsersItem from "./pages/Users";
import Card from "./pages/Card";
import Profile from "./pages/Admin";
import Balanse from "./pages/ReletiveAdmin";
import Morez from "./pages/fateail";
import PrivateRoutes from "./components/PrivateRoutes";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<MainLyout />}>
          <Route path="/home" element={<Login />} />
          <Route path="/alluser" element={<UsersItem />} />
          <Route path="/report" element={<Card />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/" element={<Balanse />} />
          <Route path="/user/:id" element={<Morez />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
