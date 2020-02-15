import React from 'react';

const styles = {
  summaryBox: {
    borderRadius: 5,
    boxShadow: '0 1px 3px grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 25
  },
  summarySubContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  summaryHeading: {
    fontSize: '1.75rem',
    color: '#216e82',
    fontWeight: 200,
    textAlign: 'right',
    width: '50%',
    marginRight: 15
  },
  summaryValue: {
    fontSize: '1.75rem',
    color: '#ff8c56',
    fontWeight: 200,
    textAlign: 'left',
    width: '50%'
  }
};

const CheckoutSummary = ({ purchasing, user, ...props }) => {
  return (
    <div style={styles.summaryBox}>
      <div style={styles.summarySubContainer}>
        <p style={styles.summaryHeading}>Purchasing :</p>
        <p style={styles.summaryValue}>{purchasing.slotsInBasket} slots</p>
      </div>
      <div style={styles.summarySubContainer}>
        <p style={styles.summaryHeading}>Price :</p>
        <p style={styles.summaryValue}>£{purchasing.basketTotal}</p>
      </div>
      <div style={styles.summarySubContainer}>
        <p style={styles.summaryHeading}>New Book Count :</p>
        <p style={styles.summaryValue}>
          {user.attributes.bookLimit + purchasing.slotsInBasket} (used{' '}
          {purchasing.slotsUsed})
        </p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
