import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AlbumIcon from '@material-ui/icons/Album';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles'
import MusicProvider from '../../context'

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Track = (props) => {
  const classes = useStyles();
  const { track } = props;
  const { favouriteTrackList, setFavouriteTrackList } = useContext(MusicProvider.context);
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    const favouriteTrack = favouriteTrackList.filter((item) => {
      return item.track_id === track.track_id;
    });
    if (favouriteTrack.length) {
      setFavourite(true)
    } else {
      setFavourite(false)
    }

  }, []);

  const toggleFavourite = () => {
    // Removes item from favourites list array
    if (favourite === true) {
      setFavourite(false)
      setFavouriteTrackList(favouriteTrackList.filter(item => item.track_id !== track.track_id));
    // Adds item to favourites list array
    } else {
      setFavourite(true)
      setFavouriteTrackList([...favouriteTrackList, track]);
    }
  }

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <div className={classes.title}>
            <Typography variant="h6" gutterBottom>{track.artist_name}</Typography>
            <IconButton edge="end" onClick={toggleFavourite} >
              {
                favourite === true ? <FavoriteIcon color="primary" /> :  <FavoriteBorderIcon  /> 
              }
            </IconButton>
          </div>
          <Typography variant="subtitle1" gutterBottom><PlayCircleFilledIcon/> Track: {track.track_name}</Typography>
          <Typography variant="subtitle2" gutterBottom><AlbumIcon/> Album: {track.album_name}</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`lyrics/track/${track.track_id}`} variant="contained" color="primary" fullWidth>
            <ChevronRightIcon/> View Lyrics
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Track
