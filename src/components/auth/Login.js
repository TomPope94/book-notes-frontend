import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from 'actions/auth';

import { AUTH_FORGOT } from 'constants/routes';

import FormInput from 'components/elements/FormInput';
import FormButton from 'components/elements/FormButton';

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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
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
    <div style={styles.contentContainer}>
      <div style={styles.formContainer}>
        <div style={styles.form}>
          <h1 style={styles.title}>
            Login<span style={{ color: '#fff' }}>.</span>
          </h1>
          <form style={styles.form} onSubmit={e => handleSubmit(e)}>
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
            <div style={styles.buttonRow}>
              <Link to={AUTH_FORGOT}>Can't Remember?</Link>
              <FormButton type="submit">Login</FormButton>
            </div>
          </form>
        </div>
      </div>
      <div style={styles.changeFormContainer} />
    </div>
  );
};

export default connect(null, { login })(Login);
