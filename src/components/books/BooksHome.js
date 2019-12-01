import React from 'react';

import Book from 'components/elements/Book';

const styles = {
  library: {
    paddingLeft: 50,
    paddingRight: 50
  }
};

const BooksHome = () => {
  return (
    <div style={styles.library}>
      <h1>My Library.</h1>
      <Book addBook={true} />
    </div>
  );
};

export default BooksHome;
