import React from "react";
import Main from "./components/Main";
import Registration from "./components/Registration/Registration";
import PlayListBlock from "./components/Products/PlayListBlock";

const App = () => {
  return (
    <div>
      <Main />

      <PlayListBlock />
      <Registration></Registration>
    </div>
  );
};

export default App;
