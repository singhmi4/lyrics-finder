import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import MusicProvider from '../../context'

const Tracks = () => {
  const context = useContext(MusicProvider.context);
  console.log(context);
  return (
    <Typography variant="h5">Tracks</Typography>
  )
}

export default Tracks
