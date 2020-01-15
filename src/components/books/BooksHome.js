import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { listBooks } from 'actions/books/books';

import Book from 'components/elements/Book';
import Loader from 'components/elements/Loader';

const styles = {
  library: {
    paddingLeft: 50,
    paddingRight: 50,
    color: 'rgba(34, 38, 65, 0.75)'
  },
  catalog: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subHeading: {
    fontWeight: 200
  }
};

const BooksHome = ({ listBooks, books }) => {
  useEffect(() => {
    listBooks();
  }, [listBooks]);

  const bookReadingBooks = books.books
    ? books.books.map(book =>
        book.bookState === 'Reading' ? (
          <Book
            addBook={false}
            id={book.bookId}
            bookTitle={book.bookTitle}
            key={uuid.v4()}
          />
        ) : null
      )
    : null;

  const bookPlannedBooks = books.books
    ? books.books.map(book =>
        book.bookState === 'Planned' ? (
          <Book
            addBook={false}
            id={book.bookId}
            bookTitle={book.bookTitle}
            key={uuid.v4()}
          />
        ) : null
      )
    : null;

  const bookCreatedBooks = books.books
    ? books.books.map(book =>
        book.bookState === 'Created' ? (
          <Book
            addBook={false}
            id={book.bookId}
            bookTitle={book.bookTitle}
            key={uuid.v4()}
          />
        ) : null
      )
    : null;

  const bookRender = books.books
    ? books.books.map(book => (
        <Book
          addBook={false}
          id={book.bookId}
          bookTitle={book.bookTitle}
          key={uuid.v4()}
        />
      ))
    : null;

  return books.loading ? (
    <Loader />
  ) : (
    <div style={styles.library}>
      <h1>My Library.</h1>
      <div>
        <h2 style={styles.subHeading}>Currently Reading:</h2>
        <div style={styles.catalog}>
          {bookReadingBooks}
          <Book addBook={true} />
        </div>
      </div>
      <div>
        <h2 style={styles.subHeading}>Planned:</h2>
        <div style={styles.catalog}>
          {bookPlannedBooks}
          <Book addBook={true} />
        </div>
      </div>
      <div>
        <h2 style={styles.subHeading}>In the Pipeline:</h2>
        <div style={styles.catalog}>
          {bookCreatedBooks}
          <Book addBook={true} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { listBooks })(BooksHome);
