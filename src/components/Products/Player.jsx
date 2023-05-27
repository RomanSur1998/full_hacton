import { useEffect, useState } from "react";
import useSound from "use-sound";
import playerblock from "../style/Player.module.css";

import playBtn from "../../assets/Play.svg";
import pauseBtn from "../../assets/Pause.svg";
import prevSong from "../../assets/prevSong.svg";
import nextSong from "../../assets/nextSong.svg";
import fullScreen from "../../assets/Full Screen.svg";
import valume from "../../assets/valume.svg";
import axios from "axios";

export default function Player() {
  const [volume, setVolume] = useState(1); // Начальная громкость равна 1 (максимальная)

  const qala =
    "http://34.125.252.214/media/songs/T-Fest__%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD%D0%B8%D1%82_-_%D0%9B%D0%B0%D0%BC%D0%B1%D0%B0%D0%B4%D0%B0.mp3";
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(qala, { volume });

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={playerblock.component}>
      {/* <h2>Playing Now</h2> */}
      <div className={playerblock.songInfo}>
        <img
          className={playerblock.musicCover}
          src="https://picsum.photos/200/200"
        />
        <div>
          <h3 className="title">Rubaiyyan</h3>
          <p className="subTitle">Qala</p>
        </div>
      </div>

      <div className={playerblock.songLine}>
        <div>
          <button className={playerblock.playButton}>
            <img src={prevSong} alt="" />
          </button>
          {!isPlaying ? (
            <button
              className={playerblock.playButton_1}
              onClick={playingButton}
            >
              <img src={playBtn} alt="" />
            </button>
          ) : (
            <button
              className={playerblock.playButton_1}
              onClick={playingButton}
            >
              <img src={pauseBtn} alt="" />
            </button>
          )}
          <button className={playerblock.playButton}>
            <img src={nextSong} alt="" />
          </button>
        </div>

        <div className={playerblock.songTimeLine}>
          <div className={playerblock.time}>
            <p>
              1212
              {currTime.min}:{currTime.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className={playerblock.linetime}
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
          <div>
            <p>
              3232
              {time.min}:{time.sec}
            </p>
          </div>
        </div>
      </div>
      <div className={playerblock.rightLineSong}>
        <img src={valume} alt="" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <img src={fullScreen} alt="" />
        {/* <img src={fullScreen} alt="" s /> */}
      </div>
    </div>
  );
}
