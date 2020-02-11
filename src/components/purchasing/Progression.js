import React, { Fragment } from 'react';

const styles = {
  circle: {
    borderRadius: '50%',
    height: 25,
    width: 25,
    marginLeft: 25
  },
  circleActive: {
    background: '#4da4b8'
  },
  circleInactive: {
    background: '#b8e0e8'
  }
};

const Progression = ({ ...props }) => {
  return (
    <div {...props}>
      <div style={{ ...styles.circle, ...styles.circleActive }} />
      <div style={{ ...styles.circle, ...styles.circleInactive }} />
      <div style={{ ...styles.circle, ...styles.circleInactive }} />
      <div style={{ ...styles.circle, ...styles.circleInactive }} />
    </div>
  );
};

export default Progression;
