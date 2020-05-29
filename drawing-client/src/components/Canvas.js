import React, { Fragment, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Canvas (props) {
  const classes = useStyles();

  useEffect(() => {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

    // a flag whether the user mouse-downs or not
      let painting = false;

      const startPosition = (e) => {
          painting = true;
          draw(e);
      }

      const finishedPosition = () => {
          painting = false;
          ctx.beginPath();
      }

      const draw = (e) => {
          if(!painting) return;
          ctx.lineWidth = 10;
          ctx.lineCap = "round";
          ctx.lineTo(e.clientX - 40, e.clientY - 131);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(e.clientX - 40, e.clientY -131);
      };

    // EventListener
      canvas.addEventListener('mousedown', startPosition);
      canvas.addEventListener('mouseup', finishedPosition);
      canvas.addEventListener('mousemove', draw);
  });

  return (
      <Fragment>
        <canvas width="300" height="300" style={{border:'1px solid black'}} id="canvas"></canvas>
        <input type="color" id="strokeColor" />
        <input type="range" min="1" max="20" id="strokeWidth" />
      </Fragment>
  );
}

export default Canvas;
