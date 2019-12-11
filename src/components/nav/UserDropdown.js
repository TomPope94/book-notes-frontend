import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from 'actions/auth';
import { ACCOUNT_HOME } from 'constants/routes';

const UserDropdown = ({ logout }) => {
  const history = useHistory();
  return (
    <Fragment>
      <h1>Username</h1>
      <h4 onClick={() => history.push(ACCOUNT_HOME)}>Account</h4>
      <h4>Profile</h4>
      <button onClick={() => logout()}>Logout</button>
    </Fragment>
  );
};

export default connect(null, { logout })(UserDropdown);
