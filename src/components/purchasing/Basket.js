import React from 'react';
import ContinueStoreButton from 'components/elements/ContinueStoreButton';

const styles = {
  contentText: {
    fontSize: '1.5rem',
    fontWeight: 200,
    color: '#216e82'
  },
  orangeSpan: {
    color: '#ff8c56'
  },
  topRowContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  middleRowContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 100
  },
  buttonsRowContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10%'
  },
  backButton: {
    boxShadow: '0 1px 2px grey',
    padding: 20,
    maxHeight: 30,
    borderRadius: 5,
    marginRight: 25,
    cursor: 'pointer'
  }
};

const Basket = ({ purchasing, changeview, slotsleft, ...props }) => {
  const { slotsInBasket, basketTotal } = purchasing;

  return (
    <div>
      <p style={styles.contentText}>Your Basket:</p>
      <div style={styles.topRowContainer}>
        <p style={styles.contentText}>
          You're purchasing{' '}
          <span style={styles.orangeSpan}>{slotsInBasket}</span> book slots for
          a total of <span style={styles.orangeSpan}>£{basketTotal}</span>
        </p>
      </div>
      <div style={styles.middleRowContainer}>
        <div style={{ minHeight: 400 }}>
          <h2>Image will go here!</h2>
        </div>
        <p style={styles.contentText}>
          New Book Count:{' '}
          <span style={styles.orangeSpan}>{slotsleft + slotsInBasket}</span>
        </p>
      </div>
      <div style={styles.buttonsRowContainer}>
        <div style={styles.backButton} onClick={() => changeview(1)}>
          Back.
        </div>
        {basketTotal > 0 ? (
          <ContinueStoreButton
            text="To Checkout."
            onClick={() => changeview(3)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Basket;
