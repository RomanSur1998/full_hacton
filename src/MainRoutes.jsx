import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import PlayListBlock from "./components/Products/PlayListBlock";
import FullMain from "./components/FullMain";
import Main from "./components/Main";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME PAGE</h1>} />
      <Route path="/register" element={<Registration />} />
      <Route path="/fullmain" element={<FullMain />} />
      <Route path="/main" element={<Main />} />
      <Route path="/my_play_list" element={<PlayListBlock />} />
    </Routes>
  );
};

export default MainRoutes;
