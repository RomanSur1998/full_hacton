import React from "react";
import { Route, Routes } from "react-router-dom";
import MyPalayList from "./components/Products/MyPalayList";
import Main from "./components/Main";
import Download from "./components/Products/Download";
import Player from "./components/Products/Player";
import FullMain from "./components/Products/FullMain";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MyPalayList />} /> */}
      <Route path="/" element={<Main />} />
      {/* <Route path="/register" element={<Registration />} /> */}
      <Route path="/my_play_list" element={<MyPalayList />} />
      <Route path="/download" element={<Download />} />
      <Route path="/fullmain" element={<FullMain />} />
      {/* <Route path="/player" element={<Player />} /> */}
    </Routes>
  );
};

export default MainRoutes;
