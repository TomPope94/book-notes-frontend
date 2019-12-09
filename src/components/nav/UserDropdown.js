import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { logout } from 'actions/auth';

const UserDropdown = ({ logout }) => {
  return (
    <Fragment>
      <h1>Username</h1>
      <h4>Account</h4>
      <h4>Profile</h4>
      <button onClick={() => logout()}>Logout</button>
    </Fragment>
  );
};

export default connect(null, { logout })(UserDropdown);
