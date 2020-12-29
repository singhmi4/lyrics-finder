import React, { useState, useContext } from 'react'
import axios from 'axios';
import MusicProvider from '../../context'
import { Card, CardContent, TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const Search = () => {
  const classes = useStyles();
  const [trackTitle, setTrackTitle] = useState("");
  const { setTrackList, setHeading } = useContext(MusicProvider.context);
  

  const handleChange = (event) => {
    setTrackTitle(event.target.value);
  }

  const findTrack = (event) => {
    event.preventDefault();
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
      process.env.REACT_APP_MM_KEY
    }`)
      .then(res => {
        // console.log(res.data);
        setTrackList(res.data.message.body.track_list);
        setHeading("Search Results");
        setTrackTitle("");
      })
      .catch(err => console.log(err))
  }

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography align="center" variant="h3" gutterBottom>
          <MusicNoteIcon fontSize="large" /> Search For A Song
        </Typography>
        <Typography align="center" variant="h6">Get the lyrics for any song</Typography>
        <form noValidate autoComplete="off" onSubmit={findTrack} >
          <TextField 
            placeholder="Song title..." 
            value={trackTitle}
            onChange={handleChange}
            fullWidth />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Get Track Lyrics
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Search
