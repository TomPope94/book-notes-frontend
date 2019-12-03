import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { deleteBook } from 'actions/books';

import { BOOKS_HOME } from 'constants/routes';

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
  }
};

const BookDetails = ({ selectedBook, deleteBook }) => {
  const [redirect, setRedirect] = useState(false);

  const history = useHistory();

  const handleDelete = async () => {
    await deleteBook(selectedBook.bookId);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={BOOKS_HOME} />;
  }

  let toRender;
  if (!selectedBook) {
    toRender = (
      <Fragment>
        <h1>{'No book selected'}</h1>
      </Fragment>
    );
  } else {
    const {
      bookTitle,
      bookAuthor,
      numPages,
      coverArt,
      categories,
      bookLanguage
    } = selectedBook;
    toRender = (
      <Fragment>
        <h1>{bookTitle}</h1>
        <p>{bookAuthor}</p>
        <p>{numPages}</p>
        <p>{coverArt}</p>
        <p>{categories}</p>
        <p>{bookLanguage}</p>
        <button onClick={() => handleDelete()}>Delete Test</button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div
        style={{ ...styles.pageContainer, cursor: 'pointer' }}
        onClick={() => history.push(BOOKS_HOME)}
      />
      <div style={{ ...styles.pageContainer, pointerEvents: 'none' }}>
        <div style={styles.contentContainer}>{toRender}</div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { deleteBook })(BookDetails);
