import React, { useState, Fragment } from 'react';

import Login from './auth/Login';
import Register from './auth/Register';

const Auth = () => {
  const [loginState, setLoginState] = useState(true);

  return (
    <Fragment>
      {loginState ? <Login /> : <Register />}
      <button onClick={() => setLoginState(!loginState)}>Change</button>
    </Fragment>
  );
};

export default Auth;
