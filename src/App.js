import React from "react";
import SignUp from "./components/SignUp/SignUp";
import MainBlockPages from './components/pages/MainBlockPages.jsx'


import { useLocation } from "react-router";
import Auth from "./components/Auth/Auth";
import ResetPassword from "./components/Auth/ResetPassword";
import Profile from "./components/Auth/Profile";

const App = () => {
  const rout = useLocation();
  return (
    <div>
      {rout.pathname === "/signup" ? (
        <SignUp />
      ) : rout.pathname === "/login" ? (
        <Auth />
      ): rout.pathname === '/reset' ? (<ResetPassword/>):
      rout.pathname === '/profile' ? (<Profile/>):(
        <MainBlockPages/>
      ) }
    </div>
  );
};

export default App;
