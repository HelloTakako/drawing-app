import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import Canvas from '../Canvas';
import ChatBox from '../ChatBox';

function RoomPage (props) {
  useEffect(() => {
    document.title = `Room`;
  });

  const Main = styled.main`
    padding: 0 20px;
  `;

  const RoomWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const RoomDiv = styled.div`
    width: 48%;
  `

  return (
    <Main className='RoomPage'>
      <h2>Room</h2>
      <RoomWrapper>
        <RoomDiv>
            <Canvas />
        </RoomDiv>
        <RoomDiv>
            <ChatBox />
        </RoomDiv>
      </RoomWrapper>
    </Main>
  );
}

export {RoomPage};
