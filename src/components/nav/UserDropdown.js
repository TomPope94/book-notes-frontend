import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from 'actions/auth';
import { ACCOUNT_HOME, PROFILE_HOME, USER_ACTIVITY } from 'constants/routes';

const styles = {
  linksContainer: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  linkStyling: {
    marginBottom: 15,
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#fff'
  }
};

const UserDropdown = ({ logout }) => {
  return (
    <div style={styles.linksContainer}>
      <h1>Username</h1>
      <Link style={styles.linkStyling} to={ACCOUNT_HOME}>
        Account
      </Link>
      <Link style={styles.linkStyling} to={PROFILE_HOME}>
        Profile
      </Link>
      <Link style={styles.linkStyling} to={USER_ACTIVITY}>
        Activity
      </Link>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default connect(null, { logout })(UserDropdown);
