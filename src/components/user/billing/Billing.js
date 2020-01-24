import React from "react";

import { USER_HOME, ACCOUNT_BILLING } from "constants/routes";

import Breadcrumb from "components/nav/Breadcrumb";

const Billing = () => {
  return (
    <div>
      <Breadcrumb routes={{ USER_HOME, ACCOUNT_BILLING }} />
      <h1>Billing Page</h1>
    </div>
  );
};

export default Billing;
