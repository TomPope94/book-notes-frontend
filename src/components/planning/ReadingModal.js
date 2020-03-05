import React from 'react';
import uuid from 'uuid';

import Book from 'components/elements/Book';

const styles = {
  contentContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100vw',
    background: 'rgba(1,1,1,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '60%',
    height: '60%',
    background: '#fff',
    borderRadius: 10,
    boxShadow: '0 2px 3px rgba(1,1,1,0.2)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const ReadingModal = ({ books, changestate, ...props }) => {
  return (
    <div onMouseDown={() => changestate(false)} style={styles.contentContainer}>
      <div style={styles.modalContainer}>
        {books.books.length > 0
          ? books.books.map(book => (
              <Book
                addBook={false}
                id={book.bookId}
                bookTitle={book.bookTitle}
                image={book.coverArt}
                key={uuid.v4()}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ReadingModal;
