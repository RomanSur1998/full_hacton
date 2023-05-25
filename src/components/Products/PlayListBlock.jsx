import React from "react";
import playlist from "..//style/PalyListBlock.module.css";
import MyPalayList from "./MyPalayList";
import Navbar from "./Navbar";

import SideBar from "./SideBar";
// import Main from "../Main";
const PlayListBlock = () => {
  return (
    <div className={playlist.container}>
      <div className={playlist.leftPart}>
        <SideBar />
      </div>
      <div className={playlist.rightPart}>
        <div className={playlist.navbar_line}>
          <Navbar />
        </div>
        <MyPalayList />
        {/* <Main /> */}
      </div>
    </div>
  );
};

export default PlayListBlock;
