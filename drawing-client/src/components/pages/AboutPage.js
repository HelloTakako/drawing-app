import React from 'react';
import { useEffect } from 'react';

import { Container } from 'react-bootstrap';

function AboutPage (props) {
  useEffect(() => {
    document.title = `About`;
  });


  return (
    <Container>
      <h2>About Page</h2>
    </Container>
  );
}

export {AboutPage};
