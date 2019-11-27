import React, { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      login(email, password);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div style={styles.form}>
      <h1>Login.</h1>
      <form style={styles.form} onSubmit={e => handleSubmit(e)}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default connect(null, { login })(Login);
