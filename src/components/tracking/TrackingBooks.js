import React from 'react';
import uuid from 'uuid';

import Book from 'components/elements/Book';

const styles = {
  booksContainer: {
    display: 'flex'
  },
  bookContainer: {
    position: 'relative'
  }
};

const TrackingBooks = ({ books }) => {
  //   debugger;
  const readingBooks =
    books.books.length > 0
      ? books.books.filter(book => book.name === 'Reading')[0]
      : null;

  return (
    <div style={styles.booksContainer}>
      {readingBooks
        ? readingBooks.books.map(book => (
            <div style={styles.bookContainer}>
              <Book
                addBook={false}
                id={book.bookId}
                bookTitle={book.bookTitle}
                image={book.coverArt}
                key={uuid.v4()}
                hoverEffect={true}
                // onMouseOver={

                // Change the context

                // }
                styling={{
                  height: 100,
                  minWidth: 70,
                  maxWidth: 70,
                  marginLeft: 5,
                  marginRight: 5
                }}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default TrackingBooks;
