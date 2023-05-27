import React, { useEffect, useState } from "react";
import playlist from "../style/PalyListBlock.module.css";

import Navbar from "../Products/Navbar";
import SideBar from "../Products/SideBar";
import MainRoutes from "../../MainRoutes";
import Player from "../Products/Player";
import FullMain from "../Products/FullMain";

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
        <div className={playlist.route_block}>
          <MainRoutes />
        </div>
      </div>
      <div className={playlist.player_block}>
        <Player />
      </div>
    </div>
  );
};

export default PlayListBlock;
