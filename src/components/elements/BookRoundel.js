import React from 'react';

const BookRoundel = ({ value = 'none' }) => {
  const styles = {
    container: {
      position: 'absolute',
      opacity: value === 'none' ? 0 : 1,
      top: 0,
      right: 0,
      borderRadius: '50%',
      height: 50,
      width: 50,
      background:
        value === 'positive' ? 'green' : value === 'neutral' ? 'orange' : 'red'
    }
  };

  return (
    <div style={styles.container}>
      <p>{value === 'positive' ? '-' : value === 'neutral' ? '-' : '!'}</p>
    </div>
  );
};

export default BookRoundel;
