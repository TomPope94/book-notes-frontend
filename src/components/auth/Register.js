import React, { useState } from 'react';

import RegisterForm from 'components/auth/RegisterForm';
import VerifyForm from 'components/auth/VerifyForm';

const styles = {
  formContainer: {
    height: '100%',
    background: '#f38b66',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Register = () => {
  const [registerState, setRegisterState] = useState(false);

  return (
    <div style={styles.formContainer}>
      <div style={styles.form} className="formContent">
        <h1 style={styles.title}>
          Register<span style={{ color: '#fff' }}>.</span>
        </h1>
        {!registerState ? (
          <RegisterForm
            style={styles.formInputs}
            changeState={newState => setRegisterState(newState)}
          />
        ) : (
          <VerifyForm
            style={styles.formInputs}
            changeState={newState => setRegisterState(newState)}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
