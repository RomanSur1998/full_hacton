import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Auth from "./components/Auth/Auth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME PAGE</h1>} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
};

export default MainRoutes;
