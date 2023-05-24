import React from "react";
import heart from "../../assets/Vector.png";
import classes from "..//style/MuPlayList.module.css";
import play from "../../assets/Play.svg";
import download from "../../assets/Line=empty, Name=download.svg";
import search from "../../assets/Line=bold, Name=search.svg";
import drop from "../../assets/fi-ss-caret-down.svg";
import clock from "../../assets/Line=Clock.svg";

const MyPalayList = () => {
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
            <img src={play} alt="" />
            <img src={download} alt="" />
          </div>
          <div className={classes.track_props_right}>
            <img src={search} alt="" />
            <span>Дата добавления </span>
            <img src={drop} alt="" />
          </div>
        </div>
        <div className={classes.track_line_head}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Название</th>
                <th>Альбом</th>
                <th>Дата добавления</th>
                <th>
                  <img src={clock} alt="" />
                </th>
              </tr>
            </thead>
            {/* <hr /> */}
            <tbody>
              <tr className={classes.track_line}>
                <td>
                  <img src={play} alt="" />
                </td>
                <td>
                  <img src="" alt="" />
                  <h5> Название трека </h5>
                  <h5> Имя исполнителя </h5>
                </td>
                <td>Называние альбома</td>
                <td>Дата добавления</td>
                <td>Длинна трека</td>
              </tr>

              <tr className={classes.track_line}>
                <td>
                  <img src={play} alt="" />
                </td>
                <td>
                  <img src="" alt="" />
                  <h5> Название трека </h5>
                  <h5> Имя исполнителя </h5>
                </td>
                <td>Называние альбома</td>
                <td>Дата добавления</td>
                <td>Длинна трека</td>
              </tr>
              <tr className={classes.track_line}>
                <td>
                  <img src={play} alt="" />
                </td>
                <td>
                  <img src="" alt="" />
                  <h5> Название трека </h5>
                  <h5> Имя исполнителя </h5>
                </td>
                <td>Называние альбома</td>
                <td>Дата добавления</td>
                <td>Длинна трека</td>
              </tr>
              <tr className={classes.track_line}>
                <td>
                  <img src={play} alt="" />
                </td>
                <td>
                  <img src="" alt="" />
                  <h5> Название трека </h5>
                  <h5> Имя исполнителя </h5>
                </td>
                <td>Называние альбома</td>
                <td>Дата добавления</td>
                <td>Длинна трека</td>
              </tr>
              <tr className={classes.track_line}>
                <td>
                  <img src={play} alt="" />
                </td>
                <td>
                  <img src="" alt="" />
                  <h5> Название трека </h5>
                  <h5> Имя исполнителя </h5>
                </td>
                <td>Называние альбома</td>
                <td>Дата добавления</td>
                <td>Длинна трека</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPalayList;
