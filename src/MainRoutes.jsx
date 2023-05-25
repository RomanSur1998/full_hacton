import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Auth from "./components/Auth/Auth";
import PlayListBlock from "./components/Products/PlayListBlock";
import Main from "./components/Main";
import LogOut from "./components/Auth/LogOut";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/logout" element={<LogOut />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/my_play_list" element={<PlayListBlock />} />
      <Route path="/main" element={<Main></Main>} />
    </Routes>
  );
};

export default MainRoutes;
