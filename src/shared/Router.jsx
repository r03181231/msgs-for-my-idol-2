import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import MyProfile from "pages/MyProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="register" element={<Register />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
