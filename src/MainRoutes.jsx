import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import PlayListBlock from "./components/pages/MainBlockPages";
import MyPalayList from "./components/Products/MyPalayList";
import Main from "./components/Main";
import Download from "./components/Products/Download";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MyPalayList />} /> */}
      <Route path="/" element={<Main />} />
      {/* <Route path="/register" element={<Registration />} /> */}
      <Route path="/my_play_list" element={<MyPalayList />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
};

export default MainRoutes;
