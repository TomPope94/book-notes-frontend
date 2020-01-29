import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import { countBooks, updateQuants } from "actions/purchasing";

import ProductHome from "components/purchasing/ProductHome";
import Basket from "components/purchasing/Basket";
import Checkout from "components/purchasing/Checkout";
import BasketPopout from "components/purchasing/BasketPopout";

const styles = {
  basketPopout: {
    position: "absolute",
    top: 0,
    right: 50
  }
};

const PurchaseJourney = ({ purchasing, user, countBooks, updateQuants }) => {
  const [viewState, setViewState] = useState("products");

  useEffect(() => {
    countBooks();
    if (purchasing.basketTotal > 0) {
      setViewState("basket");
    }
  }, []);

  const slotsLeft = purchasing.slotsUsed - user.attributes.bookLimit;

  return (
    <div>
      <h1>Liberead Store.</h1>
      <div>
        {viewState === "products" ? (
          <Fragment>
            <p>You have {slotsLeft} slots left.</p>
            <ProductHome
              changeview={setViewState}
              purchasing={purchasing}
              updatebasket={updateQuants}
            />
            <BasketPopout style={styles.basketPopout} purchasing={purchasing} />
          </Fragment>
        ) : viewState === "basket" ? (
          <Basket purchasing={purchasing} changeview={setViewState} />
        ) : viewState === "checkout" ? (
          <Checkout />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  purchasing: state.purchasing,
  user: state.user
});

export default connect(mapStateToProps, { countBooks, updateQuants })(
  PurchaseJourney
);
