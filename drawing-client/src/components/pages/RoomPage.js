import React from 'react';
import { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import Canvas from '../Canvas';
import ChatBox from '../ChatBox';

function RoomPage (props) {
  useEffect(() => {
    document.title = `Room`;
  });

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
            <Canvas />
            <ChatBox />
    </Grid>
  );
}

export {RoomPage};
