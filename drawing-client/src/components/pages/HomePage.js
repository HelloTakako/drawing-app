import React from 'react';
import { useEffect } from 'react';

function HomePage (props) {
  useEffect(() => {
    document.title = `Home`;
  });


  return (
    <main className='HomePage'>
      <h2>Home Page</h2>
      <div>
        <div>
          <h3>User Name</h3>
          <p>User profile image</p>
          <div>Friends: 0</div>
        </div>
        <div>
          <button>Create a Room</button>
          <button>Join a Room</button>
          <button>Search Friends</button>
        </div>
      </div>
    </main>
  );
}

export {HomePage};
