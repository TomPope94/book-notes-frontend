import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Elements, injectStripe } from 'react-stripe-elements';

import { startPayIntent } from 'actions/purchasing';

import CheckoutForm from 'components/purchasing/CheckoutForm';
import CheckoutConfirm from 'components/purchasing/CheckoutConfirm';

const Checkout = ({ purchasing, changeview, startPayIntent, ...props }) => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardObj, setCardObj] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const { slotsInBasket, basketTotal } = purchasing;

  const handleStart = async ev => {
    ev.preventDefault();
    if (props.stripe) {
      const secret = await startPayIntent({
        slots: purchasing.slotsInBasket
      });
      await setClientSecret(secret.secret.client_secret);
      await setCardObj(props.elements.getElement('card'));
      setConfirm(true);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  const handleConfirm = async ev => {
    ev.preventDefault();

    if (props.stripe) {
      await props.stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardObj,
          billing_details: {
            name: cardholderName
            // add email address here...
          }
        }
      });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  return (
    <Fragment>
      <p>
        You're purchasing {slotsInBasket} book slots for a total of £
        {basketTotal}
      </p>
      <div style={{ width: '50%' }}>
        <CheckoutForm
          changecardname={setCardholderName}
          cardholdername={cardholderName}
          submit={handleStart}
          changeview={changeview}
        />
      </div>
      {!confirm ? null : <CheckoutConfirm submit={handleConfirm} />}
      <button onClick={() => changeview('basket')}>Back to Basket</button>
    </Fragment>
  );
};

export default connect(null, { startPayIntent })(injectStripe(Checkout));
