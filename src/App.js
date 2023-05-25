import React from "react";
import SignUp from "./components/SignUp/SignUp";
import PlayListBlock from "./components/pages/PlayListBlock";

import { useLocation } from "react-router";
import Auth from "./components/Auth/Auth";

const App = () => {
  const rout = useLocation();
  console.log(rout.pathname);
  return (
    <div>
      {rout.pathname === "/signup" ? (
        <SignUp />
      ) : rout.pathname === "/login" ? (
        <Auth />
      ) : (
        <PlayListBlock />
      )}
    </div>
  );
};

export default App;
