import React from 'react';
import { useEffect } from 'react';

import styled from 'styled-components';


function SigninPage (props) {
  useEffect(() => {
    document.title = `Sign In / Sign Up`;
  });

const Main = styled.main`
  padding: 0 20px;
  display: flex;
`;
const Div = styled.div`
  padding: 20px;
`;

  return (
    <Main>
        <Div>
            <h2>Sign In</h2>

            <form action="" method="POST" id="signinForm">
                <label for="signinUsername">User Name</label><br />
                <input type="text" id="signinUsername" name="signUsername" /><br />
                <label for="signPassword">Password</label><br />
                <input type="password" id="signPassword" name="signPassword" /><br />
                <input type="submit" value="Sign In" />
            </form>
        </Div>

        <Div>
            <h2>Sign Up</h2>

            <form action="" method="POST" id="signupForm">
                <label for="signupUsername">User Name</label><br />
                <input type="text" id="signupUsername" name="signupUsername" /><br />
                <label for="signupEmail">Email Address</label><br />
                <input type="email" id="signupEmail" name="signupEmail" /><br />
                <label for="signupPassword">Password</label><br />
                <input type="password" id="signupPassword" name="signupPassword" /><br />
                <label for="signupConfirmPassword">Confirm Password</label><br />
                <input type="password" id="signupConfirmPassword" name="signupConfirmPassword" /><br />
                <input type="submit" value="Sign Up" />
            </form>
        </Div>
    </Main>
  );
}

export {SigninPage};
