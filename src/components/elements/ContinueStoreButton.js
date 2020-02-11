import React from 'react';

import StoreIcon from 'components/elements/icons/StoreIcon';

const styles = {
  buttonContainer: {
    borderRadius: 5,
    background: '#F6A88C',
    boxShadow: '0 2px 5px grey',
    display: 'flex',
    color: '#fff',
    maxHeight: 40,
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer'
  },
  contentText: {
    fontSize: '1.5rem',
    marginLeft: 25,
    marginRight: 25
  }
};

const ContinueStoreButton = ({ text, ...props }) => {
  return (
    <div style={styles.buttonContainer} {...props}>
      <StoreIcon width="50px" />
      <p style={styles.contentText}>{text}</p>
    </div>
  );
};

export default ContinueStoreButton;
