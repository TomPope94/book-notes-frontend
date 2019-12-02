import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import AddBookDetails from 'components/books/AddBookDetails';
import AddBookSearch from 'components/books/AddBookSearch';

const styles = {
  pageContainer: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(1,1,1,0.2)'
  },
  contentContainer: {
    width: '80%',
    height: '80%',
    paddingLeft: 35,
    paddingRight: 35,
    border: '3px solid #f38b66',
    boxShadow: '0 2px 5px #222641',
    background: '#fff',
    pointerEvents: 'all',
    display: 'flex',
    flexDirection: 'row'
  },
  contentLeft: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentRight: {
    height: '100%',
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
      <div
        style={{ ...styles.pageContainer, cursor: 'pointer' }}
        onClick={() => history.push('/books')}
      />
      <div style={{ ...styles.pageContainer, pointerEvents: 'none' }}>
        <div style={styles.contentContainer}>
          <div style={styles.contentLeft}>
            <h1 style={styles.title}>Add Book.</h1>
            <AddBookSearch />
          </div>
          <div style={styles.contentRight}>
            <AddBookDetails />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
