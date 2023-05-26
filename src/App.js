import React from "react";
import SignUp from "./components/SignUp/SignUp";
import MainBlockPages from './components/pages/MainBlockPages.jsx'


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
        <MainBlockPages/>
      )}
    </div>
  );
};

export default App;
