import React from 'react';
import { useEffect } from 'react';

import styled from 'styled-components';

function HomePage (props) {
  useEffect(() => {
    document.title = `Home - Eduardo Muramoto`;
  });

  const Main = styled.main`
    padding: 0 20px;
  `;

  const HomeWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
  `;

  const HomeDiv = styled.div`
    width: 48%;
  `

  const UserProfImg = styled.div`
    width: 150px;
    height: 150px;
    background-color: grey;
    border-radius: 50%;
  `;

  const HomeButton = styled.button`
    padding: 20px;
    border: 1px solid;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 10px;
  `;


  return (
    <Main className='HomePage'>
      <h2>Home Page</h2>
      <HomeWrapper>
        <HomeDiv>
          <h3>User Name</h3>
          <UserProfImg>User profile image</UserProfImg>
          <div>Friends: 0</div>
        </HomeDiv>
        <HomeDiv>
          <HomeButton>Create a Room</HomeButton>
          <HomeButton>Join a Room</HomeButton>
          <HomeButton>Search Friends</HomeButton>
        </HomeDiv>
      </HomeWrapper>
    </Main>
  );
}

export {HomePage};
