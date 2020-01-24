import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AUTH } from 'constants/routes';

const GuestNav = ({ isAuthenticated }) => {
  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h1>Guest Nav</h1>
          <Link to={AUTH.route}>Login</Link>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(GuestNav);
