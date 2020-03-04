import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import uuid from 'uuid';

import { listBooks, resetBooks, filterBooks } from 'actions/books/books';

import { BOOKS_ADD, PRODUCT_HOME } from 'constants/routes';

import Book from 'components/elements/Book';
import Loader from 'components/elements/Loader';
import LibraryFilter from 'components/books/LibraryFilter';
import AddBookIcon from 'components/elements/icons/AddBookIcon';

const styles = {
  library: {
    color: 'rgba(34, 38, 65, 0.75)'
  },
  libraryHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  catalog: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'overlay',
    overflowY: 'hidden',
    marginTop: 50,
    marginBottom: 50
  },
  groupUnderline: {
    width: '100%',
    height: 1,
    background: 'linear-gradient(to right, #216e82, transparent)',
    position: 'absolute'
  },
  libraryHeaderLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  libraryTitle: {
    fontSize: '3rem',
    fontWeight: 200,
    color: '#216e82',
    marginRight: 50
  },
  orangeSpan: {
    color: '#ff8c56'
  },
  subHeading: {
    fontWeight: 200,
    color: '#216e82'
  },
  bookCounter: {
    marginLeft: 25
  }
};

const BooksHome = ({ filterBooks, listBooks, resetBooks, books, user }) => {
  useEffect(() => {
    if (books.books.length <= 0) {
      if (books.rawBooks.length > 0) {
        filterBooks(books.rawBooks, books.filter);
      } else {
        listBooks(books.filter);
      }
    }

    return () => {
      resetBooks();
    };
  }, [filterBooks, listBooks, books.filter, resetBooks]);

  const bookCount = books.rawBooks.length;

  const history = useHistory();
  // loop through array to create a row for each element
  // loop through each element to create books for each row
  const generateGroups = booksData => {
    const groupArr = [];
    for (let i = 0; i < booksData.length; i++) {
      const books = generateBooks(booksData[i]);
      const group = (
        <div key={uuid.v4()}>
          <h2 style={styles.subHeading}>{booksData[i].name}</h2>
          <span style={styles.groupUnderline} />
          <div style={styles.catalog} key={uuid.v4()}>
            {books}
          </div>
        </div>
      );
      groupArr.push(group);
    }
    return groupArr;
  };

  const generateBooks = group => {
    const booksArr = [];
    for (let i = 0; i < group.books.length; i++) {
      const book = (
        <Book
          addBook={false}
          id={group.books[i].bookId}
          bookTitle={group.books[i].bookTitle}
          image={group.books[i].coverArt}
          key={uuid.v4()}
        />
      );
      booksArr.push(book);
    }
    return booksArr;
  };

  const renderGroups =
    books.books.length > 0 ? generateGroups(books.books) : null;

  const handleAdd = () => {
    if (bookCount >= user.attributes.bookLimit) {
      history.push(PRODUCT_HOME.route);
    } else {
      history.push(BOOKS_ADD.route);
    }
  };

  return books.loading ? (
    <Loader />
  ) : (
    <div>
      <div style={styles.library}>
        <div style={styles.libraryHeader}>
          <div style={styles.libraryHeaderLeft}>
            <h1 style={styles.libraryTitle}>
              My Library<span style={styles.orangeSpan}>.</span>
            </h1>
            <AddBookIcon height="75" onClick={() => handleAdd()} />
            <h3 style={styles.bookCounter}>
              {bookCount}/{user.attributes.bookLimit} books created
            </h3>
          </div>
          <LibraryFilter />
        </div>
        <div>{renderGroups}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.books,
  user: state.user
});

export default connect(mapStateToProps, { listBooks, resetBooks, filterBooks })(
  BooksHome
);
