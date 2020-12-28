import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Grid, Button, Card, CardContent, List, ListItem, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Spinner from '../layout/Spinner'
import Moment from 'react-moment'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Lyrics = (props) => {
  const classes = useStyles();

  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${
      process.env.REACT_APP_MM_KEY
    }`)
      .then(res => {
        setLyrics(res.data.message.body.lyrics);

        return axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${
        process.env.REACT_APP_MM_KEY
      }`)
      })
      .then(res => {
        console.log(res.data.message.body.track)
        setTrack(res.data.message.body.track);
      })
      .catch(err => console.log(err))
  }, [props.match.params.id])

  return (
    <div className={classes.root}>
      {
        track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(track).length === 0
        ? <Grid container >
            <Grid item xs={12} >
              <Spinner />
            </Grid>
          </Grid>
        : <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button component={Link} to="/" variant="contained" color="primary">
                Go Back
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {track.track_name} by <strong>{track.artist_name}</strong>
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    {lyrics.lyrics_body}
                  </Typography>
                  <List>
                    <ListItem divider>
                      <Typography variant="body" gutterBottom>
                        <strong>Album ID</strong>: {track.album_id}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                    <Typography variant="body" gutterBottom>
                      <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body" gutterBottom>
                        <strong>Explicit Words</strong>: {track.explicit === 0 ? "No" : "Yes"}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body" gutterBottom>
                        <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
                      </Typography>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

          </Grid> 
      }
    </div>
  )
}

export default Lyrics
