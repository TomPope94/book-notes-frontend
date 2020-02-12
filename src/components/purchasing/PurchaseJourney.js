import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import config from 'config';

import {
  countBooks,
  countProducts,
  countProductsHover
} from 'actions/purchasing';

import ProductHome from 'components/purchasing/ProductHome';
import Basket from 'components/purchasing/Basket';
import Checkout from 'components/purchasing/Checkout';
import BasketPopout from 'components/purchasing/BasketPopout';
import HelpIcon from 'components/elements/icons/HelpIcon';
import Progression from './Progression';

const styles = {
  basketPopout: {
    position: 'absolute',
    top: 0,
    right: 50
  },
  orangeSpan: {
    color: '#ff8c56'
  },
  titleText: {
    fontSize: '3rem',
    fontWeight: 200,
    color: '#216e82',
    flexGrow: 1
  },
  contentText: {
    fontSize: '1.5rem',
    fontWeight: 200,
    color: '#216e82'
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

const PurchaseJourney = ({
  purchasing,
  user,
  countBooks,
  countProducts,
  countProductsHover
}) => {
  const [viewState, setViewState] = useState(1);

  useEffect(() => {
    countBooks();
    if (purchasing.basketTotal > 0) {
      setViewState(2);
    }
  }, []);

  const slotsLeft = purchasing.slotsUsed - user.attributes.bookLimit;

  return (
    <div>
      <div style={styles.topRow}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={styles.titleText}>
            Liberead Store<span style={styles.orangeSpan}>.</span>
          </h1>
          <Progression
            style={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              marginLeft: 100
            }}
            changeview={setViewState}
            currentview={viewState}
            purchasing={purchasing}
          />
        </div>
        <HelpIcon width="50px" />
      </div>

      <div>
        {viewState === 1 ? (
          <Fragment>
            <p style={styles.contentText}>
              You have <span style={styles.orangeSpan}>{slotsLeft}</span> slots
              left.
            </p>
            <ProductHome
              changeview={setViewState}
              purchasing={purchasing}
              updatebasket={countProducts}
              updatebaskethover={countProductsHover}
            />
          </Fragment>
        ) : viewState === 2 ? (
          <Basket purchasing={purchasing} changeview={setViewState} />
        ) : viewState === 3 ? (
          <StripeProvider apiKey={config.STRIPE_KEY}>
            <Elements>
              <Checkout purchasing={purchasing} changeview={setViewState} />
            </Elements>
          </StripeProvider>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  purchasing: state.purchasing,
  user: state.user
});

export default connect(mapStateToProps, {
  countBooks,
  countProducts,
  countProductsHover
})(PurchaseJourney);
