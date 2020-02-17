import React from 'react';

const styles = {
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: 'rgba(0,0,0,0.2)'
  },
  confirmContainer: {
    background: '#fff',
    borderRadius: 10,
    padding: 100,
    boxShadow: '0 2px 5px grey'
  }
};

const CheckoutConfirm = ({ submit, cancel, ...props }) => {
  return (
    <div style={styles.contentContainer}>
      <div style={styles.confirmContainer}>
        <h1>Are you sure?</h1>
        <button onClick={cancel}>Cancel</button>
        <button onClick={submit}>Confirm</button>
      </div>
    </div>
  );
};

export default CheckoutConfirm;
