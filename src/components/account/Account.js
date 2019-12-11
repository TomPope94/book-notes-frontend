import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ACCOUNT_BILLING } from 'constants/routes';

const Account = () => {
  return (
    <Fragment>
      <h1>Account Page</h1>
      <Link to={ACCOUNT_BILLING}>Billing</Link>
    </Fragment>
  );
};

export default Account;
