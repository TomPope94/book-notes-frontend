import React from 'react';
import { connect } from 'react-redux';

import { listBooks } from 'actions/books';

import Book from 'components/elements/Book';

const styles = {
  library: {
    paddingLeft: 50,
    paddingRight: 50
  }
};

const BooksHome = ({ listBooks }) => {
  return (
    <div style={styles.library}>
      <h1>My Library.</h1>
      <Book addBook={true} />
      <button onClick={() => listBooks()}>Test</button>
    </div>
  );
};

export default connect(null, { listBooks })(BooksHome);
