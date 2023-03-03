import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

const MainLyout = () => {
  const [open, setOpen] = useState(true);
  

  return (
    <div className="">
      <Aside open={open} setOpen={setOpen} />
      <div className="flex">
        <Header open={open} setOpen={setOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLyout;
