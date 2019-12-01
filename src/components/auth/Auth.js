import React, { useState, Fragment, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BOOKS_HOME } from 'constants/routes';

import Login from 'components/auth/Login';
import Register from 'components/auth/Register';

const Auth = ({ isAuthenticated }) => {
  const [loginState, setLoginState] = useState(true);
  const styles = {
    pageContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'row'
    },
    hiddenContainerLeft: {
      width: '50%',
      height: '100%',
      display: loginState ? 'flex' : 'none'
    },
    changeStateContainer: {
      width: '50%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2
    },
    hiddenContainerRight: {
      width: '50%',
      height: '100%',
      display: loginState ? 'none' : 'flex'
    },
    changeStateText: {
      color: '#676a7b',
      fontSize: '3rem',
      cursor: 'pointer'
    }
  };

  if (isAuthenticated) {
    return <Redirect to={BOOKS_HOME} />;
  }

  const changeStateText = loginState
    ? 'Register an Account?'
    : 'Already Registered?';

  return (
    <div style={styles.pageContainer}>
      {loginState ? <Login /> : <Register />}
      <div style={styles.hiddenContainerLeft} />
      <div style={styles.changeStateContainer}>
        <p
          style={styles.changeStateText}
          onClick={() => setLoginState(!loginState)}
        >
          {changeStateText}
        </p>
      </div>
      <div style={styles.hiddenContainerRight} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Auth);
