import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Nav = ({ isAuthenticated, logout }) => {
  return (
    <Fragment>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Nav);
