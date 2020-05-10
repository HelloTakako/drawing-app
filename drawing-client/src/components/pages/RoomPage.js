import React from 'react';
import { useEffect } from 'react';

import Canvas from '../Canvas';
import ChatBox from '../ChatBox';

function RoomPage (props) {
  useEffect(() => {
    document.title = `Room`;
  });

  return (
    <main className='RoomPage'>
      <h2>Room</h2>
      <div>
        <div>
            <Canvas />
        </div>
        <div>
            <ChatBox />
        </div>
      </div>
    </main>
  );
}

export {RoomPage};
