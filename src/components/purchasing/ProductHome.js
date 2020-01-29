import React from "react";

const styles = {
  cardsRow: {
    display: "flex",
    justifyContent: "space-evenly"
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
  const { productsSelected } = purchasing;

  const handleChange = async (productName, direction) => {
    if (direction === "add") {
      productsSelected[productName].quantity += 1;
    } else {
      productsSelected[productName].quantity -= 1;
    }

    await updatebasket(productsSelected);
  };
  // debugger;
  return (
    <div>
      <h2>Our Products:</h2>
      <div style={styles.cardsRow}>
        <div style={styles.cardsContainer}>
          {productsSelected.one.quantity > 0 ? (
            <button
              style={styles.minusButton}
              onClick={() => handleChange("one", "subtract")}
            >
              -
            </button>
          ) : null}
          <div style={styles.card} onClick={() => handleChange("one", "add")}>
            <h2>1</h2>
            <p>£0.99</p>
          </div>
        </div>
        <div style={styles.cardsContainer}>
          {productsSelected.three.quantity > 0 ? (
            <button
              style={styles.minusButton}
              onClick={() => handleChange("three", "subtract")}
            >
              -
            </button>
          ) : null}
          <div style={styles.card} onClick={() => handleChange("three", "add")}>
            <h2>3</h2>
            <p>£1.99</p>
          </div>
        </div>
        <div style={styles.cardsContainer}>
          {productsSelected.five.quantity > 0 ? (
            <button
              style={styles.minusButton}
              onClick={() => handleChange("five", "subtract")}
            >
              -
            </button>
          ) : null}
          <div style={styles.card} onClick={() => handleChange("five", "add")}>
            <h2>5</h2>
            <p>£2.99</p>
          </div>
        </div>
      </div>
      <button onClick={() => changeview("basket")}>Basket</button>
    </div>
  );
};

export default ProductHome;
