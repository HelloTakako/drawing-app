import React from 'react';
import { useEffect } from 'react';

function HomePage (props) {
  useEffect(() => {
    document.title = `Home - Eduardo Muramoto`;
  });


  return (
    <main
      className='HomePage'
      style={{padding: '0 20px'}}
    >
      <h2>Home Page</h2>
    </main>
  );
}

export {HomePage};
