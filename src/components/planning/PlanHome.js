import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH } from 'constants/routes';
import { connect } from 'react-redux';

import { filterBooks, resetBooks, listBooks } from 'actions/books/books';

import CurrentReading from 'components/planning/CurrentReading';

const PlanHome = ({ listBooks, filterBooks, resetBooks, books }) => {
  useEffect(() => {
    if (books.books.length <= 0) {
      listBooks('bookState');
    }
    if (books.rawBooks.length > 0 || books.filter !== 'bookState') {
      filterBooks(books.rawBooks, 'bookState');
    }
  }, []);

  return (
    <Fragment>
      <h1>Plan Homepage</h1>
      <CurrentReading books={books} />
      <Link to={SEARCH.route}>Search</Link>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { listBooks, filterBooks, resetBooks })(
  PlanHome
);
