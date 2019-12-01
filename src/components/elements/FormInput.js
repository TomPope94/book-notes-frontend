import React from 'react';

const styles = {
  inputStyle: {
    background: 'none',
    border: 'none',
    borderBottom: '3px solid #222641',
    fontSize: '2rem',
    marginBottom: 50
  }
};

const FormInput = props => {
  return <input {...props} style={styles.inputStyle} />;
};

export default FormInput;
