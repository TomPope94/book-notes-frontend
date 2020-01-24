import React, { useState } from 'react';
import { connect } from 'react-redux';

import { resetPassword } from 'actions/auth';

const AuthForgotSubmit = ({ resetPassword }) => {
  const [formData, setFormData] = useState({
    username: '',
    code: '',
    newPassword: '',
    passwordCheck: ''
  });
  const { username, code, newPassword, passwordCheck } = formData;

  const handleSubmit = e => {
    e.preventDefault();

    if (newPassword === passwordCheck) {
      resetPassword(username, code, newPassword);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Reset password:</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          name="code"
          placeholder="Code"
          value={code}
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="Password"
          value={newPassword}
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="passwordCheck"
          placeholder="Repeat Password"
          value={passwordCheck}
          onChange={e => handleChange(e)}
        />
        <input type="submit" value="Reset" />
      </form>
    </div>
  );
};

export default connect(null, { resetPassword })(AuthForgotSubmit);
