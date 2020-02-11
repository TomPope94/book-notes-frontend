import React from 'react';

const styles = {
  totalContainer: {
    width: '50%',
    display: 'flex'
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    marginRight: 20
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  basketText: {
    fontSize: '1.5rem',
    fontWeight: 200,
    color: '#216e82'
  },
  orangeText: {
    color: '#ff8c56'
  }
};

const BasketChosen = ({ purchasing, ...props }) => {
  return (
    <div style={styles.totalContainer} {...props}>
      <div style={styles.leftContainer}>
        <p style={styles.basketText}>Currently Chosen :</p>
        <p style={styles.basketText}>Price : </p>
      </div>
      <div style={styles.rightContainer}>
        <p style={styles.basketText}>
          {`${purchasing.slotsInBasket} ${
            purchasing.slotsInBasket === 1 ? 'book' : 'books'
          }`}{' '}
          <span style={styles.orangeText}>
            ({purchasing.slotsInBasketHover})
          </span>
        </p>
        <p style={styles.basketText}>
          {`£${purchasing.basketTotal}`}{' '}
          <span style={styles.orangeText}>
            (£{purchasing.basketTotalHover})
          </span>
        </p>
      </div>
    </div>
  );
};

export default BasketChosen;
