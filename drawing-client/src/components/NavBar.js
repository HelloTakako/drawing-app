import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';


const Nav = styled.nav`
  padding: 10px;
  display: flex;
`;
const StyledLink = styled(Link)`
  margin-right: 20px;
`;

function NavBar (props) {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/signin">Sign In</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/room">Room(temporary shown on nav)</StyledLink>
    </Nav>
  );
}

export {NavBar};
