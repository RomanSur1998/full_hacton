import React from "react";
import classes from "../style/Navbar.module.css";
import right from "../../assets/chevron_big_right.svg";
import left from "../../assets/chevron_big_left.svg";
import users from "../../assets/Line=empty, Name=friends.svg";
import login_user from "../../assets/Line=empty, Name=UserCircle.svg";

const Navbar = () => {
  return (
    <>
      <div className={classes.line_container}>
        <div className={classes.line_left}>
          <div className={classes.line_arrow_left}>
            <img src={left} alt="" />
            {/* &lsaquo; */}
          </div>
          <div className={classes.line_arrow_left}>
            {/* &rsaquo; */}
            <img src={right} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Что хочешь послушать "
          />
        </div>
        <div className={classes.line_right}>
          <div className={classes.line_arrow_left}>
            <img src={users} alt="" />
          </div>
          <div className={classes.line_arrow_left}>
            <img src={login_user} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
