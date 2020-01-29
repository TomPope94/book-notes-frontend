import React from "react";

const BasketPopout = ({ purchasing, ...props }) => {
  return (
    <div {...props}>
      {purchasing.basketTotal <= 0 ? null : (
        <h1>Basket Total: £{purchasing.basketTotal}</h1>
      )}
    </div>
  );
};

export default BasketPopout;
