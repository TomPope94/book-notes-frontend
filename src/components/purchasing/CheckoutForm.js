import React, { Fragment, useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  CardElement
} from 'react-stripe-elements';

const style = {
  base: {
    fontSize: '32px',
    color: '#424770',
    letterSpacing: '0.025em',
    fontFamily: 'Source Code Pro, monospace',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#9e2146'
  }
};

const styles = {
  labelContainer: {
    marginBottom: 25,
    marginRight: 50,
    minWidth: 150
  },
  secondaryContainer: {
    display: 'flex'
  },
  overlayLoading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9,
    background: '#fff'
  }
};

const CheckoutForm = ({ changecardname, submit, ...props }) => {
  const [ready, setReady] = useState(false);

  return (
    <Fragment>
      <form onSubmit={submit}>
        <input
          type="text"
          value={props.cardholderName}
          placeholder="Cardholder Name"
          name="CardholderName"
          onChange={e => changecardname(e.target.value)}
        />
        <div style={styles.labelContainer}>
          <CardElement
            style={style}
            onReady={() => setReady(true)}
            hidePostalCode={true}
          />
        </div>
        <button>Pay</button>
      </form>
      {ready ? null : <div style={styles.overlayLoading} />}
    </Fragment>
  );
};

export default CheckoutForm;
