import React, { Fragment, useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  CardElement
} from 'react-stripe-elements';

const style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '32px',
    '::placeholder': {
      color: '#216e82'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

const styles = {
  labelContainer: {
    marginBottom: 25,
    minWidth: 150,
    width: '75%'
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
  },
  textInput: {
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #216e82',
    fontSize: '2rem',
    width: '75%',
    marginBottom: 50,
    fontFamily: 'baskervile',
    color: '#216e82'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 25
  }
};

const CheckoutForm = ({ changecardname, submit, changeview, ...props }) => {
  const [ready, setReady] = useState(false);

  return (
    <Fragment>
      <form style={styles.formContainer} onSubmit={submit}>
        <input
          style={styles.textInput}
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
        <button onClick={() => changeview(2)}>Back.</button>
        <button>Confirm.</button>
      </form>
      {ready ? null : <div style={styles.overlayLoading} />}
    </Fragment>
  );
};

export default CheckoutForm;
