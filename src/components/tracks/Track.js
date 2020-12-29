import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AlbumIcon from '@material-ui/icons/Album';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Track = (props) => {
  const { track } = props;
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>{track.artist_name}</Typography>
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
