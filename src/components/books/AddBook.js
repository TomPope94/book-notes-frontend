import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { BOOKS_HOME, BOOKS_ADD, BOOKS_MANUAL } from 'constants/routes';

import Breadcrumb from 'components/nav/Breadcrumb';
import AddBookDetails from 'components/books/AddBookDetails';
import AddBookSearch from 'components/books/AddBookSearch';

const styles = {
  contentContainer: {
    height: '95%',
    color: 'rgba(34, 38, 65, 0.75)',
    pointerEvents: 'all',
    display: 'flex',
    flexDirection: 'column'
  },
  addBookChoices: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  contentLeft: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentRight: {
    width: '50%'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 200
  }
};

const AddBook = () => {
  const history = useHistory();

  return (
    <Fragment>
      <div style={styles.contentContainer}>
        <Breadcrumb routes={{ BOOKS_HOME, BOOKS_ADD }} />
        <h1 style={styles.title}>Add Book.</h1>
        <div style={styles.addBookChoices}>
          <div style={styles.contentLeft}>
            <AddBookSearch />
          </div>
          <div
            style={styles.contentRight}
            onClick={() => history.push(BOOKS_MANUAL.route)}
          >
            <h1>Enter Details Manually?</h1>
            <p>For when you have all the details you need already...</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
