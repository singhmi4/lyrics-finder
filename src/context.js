import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const context = createContext(null);

const MusicProvider = ({ children }) => {

  const [trackList, setTrackList] = useState([
    { track: { track_name: 'abc' } },
    { track: { track_name: '123' } },
  ]);

  const [heading, setHeading] = useState("Top 10 Tracks");

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=${
      process.env.REACT_APP_MM_KEY
    }`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <context.Provider value={{ trackList, heading }}>
      {children}
    </context.Provider>
  )
}

MusicProvider.context = context;

export default MusicProvider;
 
