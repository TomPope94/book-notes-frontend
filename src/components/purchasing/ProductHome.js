import React from "react";

const styles = {
  slotsInBasketRow: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
  },
  card: {
    background: "#fff",
    boxShadow: "0 2px 5px grey",
    borderRadius: 10,
    padding: 25,
    cursor: "pointer"
  },
  minusButton: {
    position: "absolute",
    bottom: 0
  }
};

const ProductHome = ({ changeview, purchasing, updatebasket, ...props }) => {
  const { slotsInBasket } = purchasing;

  const handleChange = async add => {
    const newSlots = add ? slotsInBasket + 1 : slotsInBasket - 1;

    await updatebasket(newSlots);
  };
  // debugger;
  return (
    <div>
      <h2>Choose up to 5 slots:</h2>
      <div style={styles.slotsInBasketRow}>
        <h3>Current Basket:</h3>
        <p>{slotsInBasket}</p>
        {slotsInBasket < 5 ? (
          <button onClick={() => handleChange(true)}>+</button>
        ) : null}
        {slotsInBasket > 0 ? (
          <button onClick={() => handleChange(false)}>-</button>
        ) : null}
      </div>
      <button onClick={() => changeview("basket")}>Basket</button>
    </div>
  );
};

export default ProductHome;
