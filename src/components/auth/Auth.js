import React, { useState, Fragment, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BOOKS_HOME } from 'constants/routes';

import Login from 'components/auth/Login';
import Register from 'components/auth/Register';

const Auth = ({ isAuthenticated }) => {
  const [loginState, setLoginState] = useState(true);

  if (isAuthenticated) {
    return <Redirect to={BOOKS_HOME} />;
  }

  return (
    <Fragment>
      {loginState ? <Login /> : <Register />}
      <button onClick={() => setLoginState(!loginState)}>Change</button>
      <Link to={BOOKS_HOME}>Books</Link>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Auth);
