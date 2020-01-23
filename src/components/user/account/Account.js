import React, { Fragment } from "react";

import { USER_HOME, ACCOUNT_HOME } from "constants/routes";

import Breadcrumb from "components/nav/Breadcrumb";

const Account = () => {
  return (
    <Fragment>
      <Breadcrumb routes={{ USER_HOME, ACCOUNT_HOME }} />
      <h1>Account Page</h1>
    </Fragment>
  );
};

export default Account;
