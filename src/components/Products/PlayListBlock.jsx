import React from "react";
import classes from "..//style/PalyListBlock.module.css";
import MyPalayList from "./MyPalayList";
import Navbar from "./Navbar";
import Main from "../Main";
const PlayListBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftPart}>
        //todo Часть куда добавиться SIDEBAR
      </div>
      <div s className={classes.rightPart}>
        <Navbar />
        <MyPalayList />
        {/* <Main /> */}
      </div>
    </div>
  );
};

export default PlayListBlock;
