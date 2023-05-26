import React, { useEffect, useState } from "react";
import heart from "../../assets/Vector.svg";
import classes from "..//style/MuPlayList.module.css";
import play_btn from "../../assets/Play.svg";
import download from "../../assets/Line=empty, Name=download.svg";
import search from "../../assets/Line=bold, Name=search.svg";
import drop from "../../assets/fi-ss-caret-down.svg";
import clock from "../../assets/Line=Clock.svg";
import song from "../../assets/Rectangle 236.svg";
import music from "../../assets/tamada.mp3";
import ReactPlayer from "react-player";
import axios from "axios";
import useSound from "use-sound";

const MyPalayList = () => {
  // const soundFile =
  const [play, { pause, duration, sound }] = useSound(
    "http://34.125.252.214/media/songs/T-Fest__%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD%D0%B8%D1%82_-_%D0%9B%D0%B0%D0%BC%D0%B1%D0%B0%D0%B4%D0%B0.mp3"
  );
  return (
    <div>
      <div className={classes.TopInfo}>
        <div className={classes.TopInfo_Left}>
          <img src={heart} alt="" />
        </div>
        <div className={classes.TopInfo_Right}>
          <h5>Плейлист</h5>
          <h2>Любимые треки</h2>
          <h5>User : Колво Треков в плейлисте </h5>
        </div>
      </div>
      <div className={classes.track_block}>
        <div className={classes.track_props}>
          <div className={classes.track_props_left}>
            <img src={play_btn} alt="" />
            <img src={download} alt="" />
          </div>
          <div className={classes.track_props_right}>
            <img src={search} alt="" style={{ width: "25px" }} />
            <span>Дата добавления </span>
            <img src={drop} alt="" />
          </div>
        </div>
        <div className={classes.track_line_head}>
          <div className={classes.container_grid}>
            <div>
              <h4>#</h4>
            </div>
            <div>
              <h4>Name</h4>
            </div>
            <div>
              <h4>Album</h4>
            </div>
            <div>
              <h4>Date publick</h4>
            </div>
            <div>
              <img src={clock} alt="" />
            </div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>{" "}
          <div className={classes.track_line}>
            <div>
              {" "}
              <img src={play_btn} alt="" />
            </div>
            <div className={classes.track_line_section}>
              <img src={song} alt="" />
              <div className={classes.track_line_section_name}>
                <h4> Kill Bill </h4>
                <h5> SZA </h5>
              </div>
            </div>
            <div>SOS</div>
            <div>1 day ago</div>
            <div>3:22</div>
          </div>
        </div>
      </div>
      <div>
        {/* <audio
          src="http://34.125.252.214/media/songs/T-Fest__%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD%D0%B8%D1%82_-_%D0%9B%D0%B0%D0%BC%D0%B1%D0%B0%D0%B4%D0%B0.mp3"
          controls
        /> */}
        <button onClick={play}>Xnj sdkfhxgjgfhdjk</button>
      </div>
    </div>
  );
};

export default MyPalayList;
