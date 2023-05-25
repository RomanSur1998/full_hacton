import React, { useEffect, useState } from "react";
import playlist from "..//style/PalyListBlock.module.css";
import MyPalayList from "../Products/MyPalayList";
import Navbar from "../Products/Navbar";

import SideBar from "../Products/SideBar";
import Main from "../Main";
import MainRoutes from "../../MainRoutes";

const PlayListBlock = () => {
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
  return (
    <div className={scrolled ? playlist.container_1 : playlist.container}>
      <div className={playlist.leftPart}>
        <SideBar />
      </div>
      <div className={playlist.rightPart}>
        <div className={playlist.navbar_line}>
          <Navbar />
        </div>
        <MainRoutes />
      </div>
    </div>
  );
};

export default PlayListBlock;
