import React from 'react';
import { useEffect } from 'react';

import Grid from '@material-ui/core/Container';

function AboutPage (props) {
  useEffect(() => {
    document.title = `About`;
  });


  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <h2>About Page</h2>
    </Grid>
  );
}

export {AboutPage};
