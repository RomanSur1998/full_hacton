import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const songContext = createContext();
export const useSong = () => useContext(songContext);
export const API_SONGS = "http://34.125.87.211/songs/";
const SongContextProvider = ({ children }) => {
  const [volume, setVolume] = useState(1);

  //   async function getSongs() {
  //     const [Counter, setCounter] = useState(3);
  //     try {
  //       const res = await axios.get("http://34.125.87.211/songs/");
  //       console.log(res.data.results);
  //       setTrackList(res.data.results);
  //       setTrack(res.data.results[Counter].audio_file);
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   }

  const values = {
    // getSongs,
  };
  return <songContext.Provider value={values}>{children}</songContext.Provider>;
};

export default SongContextProvider;
