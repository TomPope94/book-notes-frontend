import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH } from 'constants/routes';

const PlanHome = () => {
  return (
    <Fragment>
      <h1>Plan Homepage</h1>
      <Link to={SEARCH}>Search</Link>
    </Fragment>
  );
};

export default PlanHome;
