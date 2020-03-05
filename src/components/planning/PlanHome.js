import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH } from 'constants/routes';
import { connect } from 'react-redux';

import { filterBooks, resetBooks, listBooks } from 'actions/books/books';

import CurrentReading from 'components/planning/CurrentReading';

const styles = {
  pageTitle: {
    fontSize: '3rem',
    fontWeight: 200,
    color: '#216e82',
    marginRight: 50
  },
  orangeSpan: {
    color: '#ff8c56'
  }
};

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
      <h1 style={styles.pageTitle}>
        My Plans<span style={styles.orangeSpan}>.</span>
      </h1>
      <CurrentReading books={books} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { listBooks, filterBooks, resetBooks })(
  PlanHome
);
