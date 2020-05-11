import React from 'react';
import { useEffect } from 'react';

import Grid from '@material-ui/core/Container';


function SigninPage (props) {
  useEffect(() => {
    document.title = `Sign In / Sign Up`;
  });

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
        <div>
            <h2>Sign In</h2>

            <form action="" method="POST" id="signinForm">
                <label for="signinUsername">User Name</label><br />
                <input type="text" id="signinUsername" name="signUsername" /><br />
                <label for="signPassword">Password</label><br />
                <input type="password" id="signPassword" name="signPassword" /><br />
                <input type="submit" value="Sign In" />
            </form>
        </div>

        <div>
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
        </div>
    </Grid>
  );
}

export {SigninPage};
