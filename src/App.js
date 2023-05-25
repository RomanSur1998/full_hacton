import React from "react";
import MainRoutes from "./MainRoutes";
import Main from "./components/Main";
import Registration from "./components/Registration/Registration";
import PlayListBlock from "./components/Products/PlayListBlock";

const App = () => {
  return (
    <div>
      <Registration />
      <PlayListBlock />
      <MainRoutes />
    </div>
  );
};

export default App;
