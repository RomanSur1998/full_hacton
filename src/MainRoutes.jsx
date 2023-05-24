import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import PlayListBlock from "./components/Products/PlayListBlock";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME PAGE</h1>} />
      <Route path="/register" element={<Registration />} />
      <Route path="/my_play_list" element={<PlayListBlock />} />
    </Routes>
  );
};

export default MainRoutes;
