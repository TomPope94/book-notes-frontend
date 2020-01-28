import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerUser } from 'actions/auth';

import FormInput from 'components/elements/FormInput';
import FormButton from 'components/elements/FormButton';

const styles = {
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  }
};

const RegisterForm = ({ registerUser, changeState, ...props }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { email, password, confirmPassword } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === confirmPassword) {
      await registerUser(email, password);
      changeState(true);
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)} {...props}>
      <FormInput
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={e => handleChange(e)}
      />
      <FormInput
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={e => handleChange(e)}
      />
      <FormInput
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={e => handleChange(e)}
      />
      <div style={styles.buttonRow}>
        <FormButton type="submit">Register</FormButton>
      </div>
    </form>
  );
};

export default connect(null, { registerUser })(RegisterForm);
