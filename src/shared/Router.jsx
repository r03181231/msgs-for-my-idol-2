import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import MyProfile from "pages/MyProfile";
import Layout from "component/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
