import React from 'react';
import uuid from 'uuid';
import { useHistory } from 'react-router-dom';

import Book from 'components/elements/Book';
import AddBookIcon from 'components/elements/icons/AddBookIcon';

import { BOOKS_ADD } from 'constants/routes';
import BookRoundel from 'components/elements/BookRoundel';

const styles = {
  booksContainer: {
    display: 'flex'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 200,
    color: '#216e82',
    margin: 0
  },
  bookContainer: {
    position: 'relative'
  }
};

const CurrentPlanned = ({ books }) => {
  const plannedBooks = books.rawBooks.filter(
    book => book.bookState === 'Planned'
  );
  const history = useHistory();

  return (
    <div>
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>Planned Books</h2>
        <AddBookIcon
          height="75"
          onClick={() => history.push(BOOKS_ADD.route)}
        />
      </div>
      <div style={styles.booksContainer}>
        {plannedBooks.map(book => (
          <div style={styles.bookContainer}>
            <Book
              addBook={false}
              id={book.bookId}
              bookTitle={book.bookTitle}
              image={book.coverArt}
              key={uuid.v4()}
              hoverEffect={true}
              styling={{
                height: 100,
                minWidth: 70,
                maxWidth: 70,
                marginLeft: 5,
                marginRight: 5
              }}
              roundelvalue={book.datePlanned ? 'positive' : 'negative'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPlanned;
