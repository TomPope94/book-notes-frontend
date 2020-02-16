import React, { useState } from 'react';
import StoreBook from 'components/elements/icons/store/StoreBook';
import ContinueStoreButton from 'components/elements/ContinueStoreButton';
import BasketChosen from './BasketChosen';

const styles = {
  slotsInBasketRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    width: '50%'
  },
  storeBook: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: 200,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  },
  bottomRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 50,
    width: '50%'
  }
};

const ProductHome = ({
  changeview,
  purchasing,
  updatebasket,
  updatebaskethover,
  ...props
}) => {
  const [hoverState, setHoverState] = useState(0);
  const { slotsInBasket, basketTotal } = purchasing;

  const handleHover = async num => {
    setHoverState(num);
    await updatebaskethover(num);
  };

  return (
    <div>
      <div style={styles.slotsInBasketRow}>
        <StoreBook
          number={1}
          style={styles.storeBook}
          onClick={async () => await updatebasket(1)}
          onMouseOver={() => handleHover(1)}
          hovernumber={hoverState}
          basket={slotsInBasket}
        />
        <StoreBook
          number={2}
          style={styles.storeBook}
          onClick={async () => await updatebasket(2)}
          onMouseOver={() => handleHover(2)}
          hovernumber={hoverState}
          basket={slotsInBasket}
        />
        <StoreBook
          number={3}
          style={styles.storeBook}
          onClick={async () => await updatebasket(3)}
          onMouseOver={() => handleHover(3)}
          hovernumber={hoverState}
          basket={slotsInBasket}
        />
        <StoreBook
          number={4}
          style={styles.storeBook}
          onClick={async () => await updatebasket(4)}
          onMouseOver={() => handleHover(4)}
          hovernumber={hoverState}
          basket={slotsInBasket}
        />
        <StoreBook
          number={5}
          style={styles.storeBook}
          onClick={async () => await updatebasket(5)}
          onMouseOver={() => handleHover(5)}
          hovernumber={hoverState}
          basket={slotsInBasket}
        />
      </div>
      <div style={styles.bottomRow}>
        <BasketChosen purchasing={purchasing} />
        <ContinueStoreButton
          text="To Basket."
          onClick={() => {
            if (slotsInBasket > 0 && basketTotal > 0) {
              changeview(2);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ProductHome;
