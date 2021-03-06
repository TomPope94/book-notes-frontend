import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { BOOKSHOME } from "../constants/routes";

import Login from "./auth/Login";
import Register from "./auth/Register";

const Auth = ({ isAuthenticated }) => {
  const [loginState, setLoginState] = useState(true);

  if (isAuthenticated) {
    return <Redirect to={BOOKSHOME} />;
  }

  return (
    <Fragment>
      {loginState ? <Login /> : <Register />}
      <button onClick={() => setLoginState(!loginState)}>Change</button>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Auth);
