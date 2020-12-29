import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const context = createContext(null);

const MusicProvider = ({ children }) => {

  const [trackList, setTrackList] = useState([]);
  const [favouriteTrackList, setFavouriteTrackList] = useState([]);
  const [heading, setHeading] = useState("Top 10 Tracks");

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=${
      process.env.REACT_APP_MM_KEY
    }`)
      .then(res => {
        // console.log(res.data);
        setTrackList(res.data.message.body.track_list);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <context.Provider value={{ trackList, setTrackList, heading, setHeading, favouriteTrackList, setFavouriteTrackList }}>
      {children}
    </context.Provider>
  )
}

MusicProvider.context = context;

export default MusicProvider;
 
