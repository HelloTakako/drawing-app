import React, { Fragment } from 'react';

import styled from 'styled-components';

function Canvas (props) {

  return (
    <Fragment>
        <canvas width="300" height="300" style={{border:'1px solid black'}}>
        </canvas>
        <input type="color" />
    </Fragment>
  );
}

export default Canvas;
