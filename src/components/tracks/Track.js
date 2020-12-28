import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Track = (props) => {
  const { track } = props;
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h5">{track.artist_name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Track
