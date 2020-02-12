import React, { Fragment } from 'react';

const styles = {
  circle: {
    borderRadius: '50%',
    height: 25,
    width: 25,
    marginLeft: 25,
    cursor: 'pointer'
  },
  circleActive: {
    background: '#4da4b8'
  },
  circleInactive: {
    background: '#b8e0e8'
  }
};

const Progression = ({ changeview, currentview, purchasing, ...props }) => {
  const { slotsInBasket, basketTotal } = purchasing;
  return (
    <div {...props}>
      <div
        style={
          currentview >= 1
            ? { ...styles.circle, ...styles.circleActive }
            : { ...styles.circle, ...styles.circleInactive }
        }
        onClick={() => changeview(1)}
      />
      <div
        style={
          currentview >= 2
            ? { ...styles.circle, ...styles.circleActive }
            : { ...styles.circle, ...styles.circleInactive }
        }
        onClick={() => {
          if (slotsInBasket > 0 && basketTotal > 0) {
            changeview(2);
          }
        }}
      />
      <div
        style={
          currentview >= 3
            ? { ...styles.circle, ...styles.circleActive }
            : { ...styles.circle, ...styles.circleInactive }
        }
      />
      <div
        style={
          currentview >= 4
            ? { ...styles.circle, ...styles.circleActive }
            : { ...styles.circle, ...styles.circleInactive }
        }
      />
    </div>
  );
};

export default Progression;
