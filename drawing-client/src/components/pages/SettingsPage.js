import React from 'react';
import { useEffect } from 'react';

import Grid from '@material-ui/core/Container';

function SettingsPage (props) {
  useEffect(() => {
    document.title = `Account Settings`;
  });


  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <h2>Account Settings</h2>

      <h4>Change User Name</h4>
        <form action="" method="POST">
            New User Name: <input type="text" name="new_username" /><br />
            <input type="submit" name="update_username" value="Update Username" /><br />
        </form>

      <h4>Change User Image</h4>

      <h4>Change Password</h4>
        <form action="" method="POST">
            Old Password: <input type="password" name="old_password" /><br />
            New Password: <input type="password" name="new_password_1" /><br />
            New Password Again: <input type="password" name="new_password_2" /><br />

            <input type="submit" name="update_password" id="save_details" value="Update Password" /><br />
        </form>

      <h4>Delete Account</h4>

    </Grid>
  );
}

export {SettingsPage};
