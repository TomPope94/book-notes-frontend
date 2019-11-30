import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerUser } from 'actions/auth';

const Register = ({ registerUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { email, password, confirmPassword } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password === confirmPassword) {
      registerUser(email, password);
    }
  };

  return (
    <div>
      <h1>Register.</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => handleChange(e)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default connect(null, { registerUser })(Register);
