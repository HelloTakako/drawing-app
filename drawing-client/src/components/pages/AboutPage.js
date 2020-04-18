import React from 'react';
import { useEffect } from 'react';

function AboutPage (props) {
  useEffect(() => {
    document.title = `About`;
  });


  return (
    <main
      className='AboutPage'
      style={{padding: '0 20px'}}
    >
      <h2>About Page</h2>
    </main>
  );
}

export {AboutPage};
