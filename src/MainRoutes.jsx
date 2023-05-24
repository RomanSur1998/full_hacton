import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./component/Registration/Registration";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME PAGE</h1>} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default MainRoutes;
