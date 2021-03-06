import React from 'react';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import CreateRoomModal from '../CreateRoomModal'

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

function HomePage (props) {
  useEffect(() => {
    document.title = `Home`;
  });

  // "Create a Room" modal window
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <h3>User Name</h3>
            <p>User profile image</p>
            <div>Friends: 0</div>
          </Grid>
          <Grid item xs={6}>
            <CreateRoomModal />
            <Button variant="outlined" color="primary">
              Join a Room
            </Button>
            <Button variant="outlined" color="primary">
              Search Friends
            </Button>
          </Grid>              
        </Grid>
      </Container>
    </div>
  );
}

export {HomePage};
