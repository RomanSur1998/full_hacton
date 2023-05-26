import React, { useEffect, useState } from "react";
import navbar from "../style/Navbar.module.css";
import right from "../../assets/chevron_big_right.svg";
import left from "../../assets/chevron_big_left.svg";
import users from "../../assets/Line=empty, Name=friends.svg";
import login_user from "../../assets/Line=empty, Name=UserCircle.svg";
import { useNavigate } from "react-router";
import ReactPlayer from "react-player";

const Navbar = () => {
  const navigate = useNavigate();
  // !-----------------
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // !=================
  return (
    <>
      <div className={navbar.screen_min}>
        <div className={navbar.screen_min_top}>
          <img src={users} alt="" />
          <img src={login_user} alt="" />
        </div>
        <div className={navbar.screen_min_bot}>
          <input type="text" />
        </div>
      </div>
      <div
        className={scrolled ? navbar.line_container_1 : navbar.line_container}
      >
        <div className={navbar.line_left}>
          <div className={navbar.line_arrow_left}>
            <img src={left} alt="" />
            {/* &lsaquo; */}
          </div>
          <div className={navbar.line_arrow_left}>
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

        <div className={navbar.line_right}>
          <button
            className={navbar.reg_btn}
            onClick={() => {
              navigate("/register");
            }}
          >
            Registration
          </button>
          <button className={navbar.log_btn}>Login</button>
          <div className={navbar.line_arrow_left}>
            <img src={users} alt="" />
          </div>
          <div className={navbar.line_arrow_left}>
            <img src={login_user} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
