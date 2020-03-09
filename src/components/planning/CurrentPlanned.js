import React from 'react';
import uuid from 'uuid';

import Book from 'components/elements/Book';

const styles = {
  booksContainer: {
    display: 'flex'
  }
};

const CurrentPlanned = ({ books }) => {
  const plannedBooks = books.rawBooks.filter(
    book => book.bookState === 'Planned'
  );

  return (
    <div>
      <h2>Planned Books</h2>
      <div style={styles.booksContainer}>
        {plannedBooks.map(book => (
          <Book
            addBook={false}
            id={book.bookId}
            bookTitle={book.bookTitle}
            image={book.coverArt}
            key={uuid.v4()}
            hoverEffect={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentPlanned;
