import React from 'react';

const Basket = ({ purchasing, changeview, ...props }) => {
  const { slotsInBasket, basketTotal } = purchasing;

  return (
    <div>
      <h1>Your basket:</h1>
      <p>
        You're purchasing {slotsInBasket} book slots for a total of £
        {basketTotal}
      </p>
      <button onClick={() => changeview(2)}>Back to Product</button>
      {basketTotal > 0 ? (
        <button onClick={() => changeview(3)}>Checkout</button>
      ) : null}
    </div>
  );
};

export default Basket;
