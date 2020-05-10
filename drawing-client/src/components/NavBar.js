import React from 'react';
import {Link} from 'react-router-dom';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar (props) {
  return (
    <Nav variant="pills">
      <LinkContainer to="/signin">
        <NavItem>Sign In</NavItem>
      </LinkContainer>
      <LinkContainer to="/settings">
        <NavItem>Settings</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem>About</NavItem>
      </LinkContainer>
      <LinkContainer to="/room">
        <NavItem>Room</NavItem>
      </LinkContainer>
    </Nav>
  );
}

export {NavBar};
