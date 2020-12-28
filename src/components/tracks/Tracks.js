import React, { useContext } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MusicProvider from '../../context'
import Spinner from '../layout/Spinner'
import Track from '../tracks/Track'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Tracks = () => {
  const classes = useStyles();
  const { trackList, heading } = useContext(MusicProvider.context);
  console.log(trackList);
  return (
    <div className={classes.root}>
      {
        trackList === undefined || trackList.length === 0 
        ? <Grid container>
            <Grid item xs={12} >
              <Spinner />
            </Grid>
        </Grid>
        :  <> 
            <Typography variant="h5" align="center">{heading}</Typography>
            <Grid container spacing={4} className={classes.root}>
              {trackList.map(item => (
                <Track key={item.track.track_id} track={item.track} />
              ))}
            </Grid>
          </>
        }
    </div>
  )
}

export default Tracks
