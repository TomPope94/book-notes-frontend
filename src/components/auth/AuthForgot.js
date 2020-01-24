import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AUTH_RESET } from 'constants/routes';

import { forgotPassword } from 'actions/auth';

const AuthForgot = ({ forgotPassword }) => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    forgotPassword(username);

    history.push(AUTH_RESET.route);
  };

  return (
    <div>
      <h1>Oh No!</h1>
      <p>Don't worry! We'll get you back up and running in no time!</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input type="submit" value="Send Link" />
      </form>
    </div>
  );
};

export default connect(null, { forgotPassword })(AuthForgot);
