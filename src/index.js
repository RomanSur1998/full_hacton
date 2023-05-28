import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import SongContextProvider from "./context/SongContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SongContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </SongContextProvider>
  </BrowserRouter>
);
