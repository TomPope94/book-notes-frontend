import React, { Fragment } from "react";

const CheckoutConfirm = ({ submit, ...props }) => {
  return (
    <Fragment>
      <h1>Are you sure?</h1>
      <button>Back</button>
      <button onClick={submit}>Confirm</button>
    </Fragment>
  );
};

export default CheckoutConfirm;
