import React from 'react';
import { useEffect } from 'react';

function LoginPage (props) {
  useEffect(() => {
    document.title = `Login - Eduardo Muramoto`;
  });


  return (
    <main
      className='LoginPage'
      style={{padding: '0 20px'}}
    >
      <h2>Login Page</h2>
    </main>
  );
}

export {LoginPage};
