import React from "react";
import MainRoutes from "./MainRoutes";
import Main from "./components/Main";
import Registration from "./components/Registration/Registration";
import PlayListBlock from "./components/pages/PlayListBlock";
import SideBar from "./components/Products/SideBar";
import { useLocation, useParams } from "react-router";

const App = () => {
  const rout = useLocation();
  console.log(rout.pathname);
  return (
    <div>
      {rout.pathname === "/register" ? (
        <Registration />
      ) : rout.pathname === "/login" ? (
        <PlayListBlock />
      ) : (
        <PlayListBlock />
      )}
    </div>
  );
};

export default App;
