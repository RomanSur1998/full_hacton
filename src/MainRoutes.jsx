import React from "react";
import { Route, Routes } from "react-router-dom";

import PlayListBlock from "./components/pages/PlayListBlock";
import MyPalayList from "./components/Products/MyPalayList";
import Main from "./components/Main";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyPalayList />} />
      <Route path="/main" element={<Main />} />
      <Route path="/my_play_list" element={<PlayListBlock />} />
      <Route path="/main" element={<Main></Main>} />
    </Routes>
  );
};

export default MainRoutes;
