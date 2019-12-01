import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerUser } from 'actions/auth';

import FormButton from 'components/elements/FormButton';
import FormInput from 'components/elements/FormInput';

const styles = {
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh'
  },
  formContainer: {
    width: '50%',
    height: '100%',
    background: '#f38b66',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  changeFormContainer: {
    width: '50%',
    height: '100%',
    background: '#fff'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '5rem',
    fontWeight: 200,
    color: '#222641'
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

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
    <div style={styles.contentContainer}>
      <div style={styles.changeFormContainer} />
      <div style={styles.formContainer}>
        <div style={styles.form}>
          <h1 style={styles.title}>
            Register<span style={{ color: '#fff' }}>.</span>
          </h1>
          <form style={styles.formInputs} onSubmit={e => handleSubmit(e)}>
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
        </div>
      </div>
    </div>
  );
};

export default connect(null, { registerUser })(Register);
