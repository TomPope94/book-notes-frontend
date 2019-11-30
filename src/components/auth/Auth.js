import React, { useState, Fragment, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BOOKSHOME } from 'constants/routes';

import Login from './Login';
import Register from './Register';

const Auth = ({ isAuthenticated }) => {
  const [loginState, setLoginState] = useState(true);

  if (isAuthenticated) {
    return <Redirect to={BOOKSHOME} />;
  }

  return (
    <Fragment>
      {loginState ? <Login /> : <Register />}
      <button onClick={() => setLoginState(!loginState)}>Change</button>
      <Link to={BOOKSHOME}>Books</Link>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Auth);
