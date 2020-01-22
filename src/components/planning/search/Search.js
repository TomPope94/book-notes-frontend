import React from 'react';

import Breadcrumb from 'components/nav/Breadcrumb';

import { PLANNING, SEARCH } from 'constants/routes';

const Search = () => {
  return (
    <div>
      <Breadcrumb routes={{ PLANNING, SEARCH }} />
      <h1>Search Page</h1>
    </div>
  );
};

export default Search;
