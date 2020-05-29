import React from 'react';
import { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';

import Canvas from '../Canvas';
import ChatBox from '../ChatBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function RoomPage (props) {
  useEffect(() => {
    document.title = `Room`;
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
                  <Grid item xs={6}>
                    <Canvas />
                  </Grid>
                  <Grid item xs={6}>
                      <ChatBox />
                  </Grid>              
        </Grid>
      </Container>
    </div>
  );
}

export {RoomPage};
