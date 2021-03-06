import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MusicProvider from '../../context'
import Track from '../tracks/Track'
import { Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));
const Favourites = () => {
  const classes = useStyles();
  const { favouriteTrackList } = useContext(MusicProvider.context);
  console.log(favouriteTrackList)
  return (
    <div className={classes.root}>
      {
        favouriteTrackList === undefined || favouriteTrackList.length === 0 
        ? <Grid container spacing={2}>
            <Grid item xs={12} justify="center" >
              <Typography variant="h5" align="center">You haven't favourited any tracks.</Typography>
              <Button component={Link} to="/" variant="contained" color="primary" fullWidth>Go Back</Button>  
            </Grid>
        </Grid>
        :  <> 
            <Button component={Link} to="/" variant="outlined" color="primary">Go Back</Button>
            <Typography variant="h5" align="center">Your Favs</Typography>
            <Grid container spacing={4} className={classes.root}>
              {favouriteTrackList.map(item => (
                <Track key={item.track_id} track={item} />
              ))}
            </Grid>
          </>
        }
    </div>
  )
}

export default Favourites
