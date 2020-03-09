import React from 'react';
import uuid from 'uuid';

import Book from 'components/elements/Book';

const ReadingModal = ({ books, changestate }) => {
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
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0 2px 3px rgba(1,1,1,0.2)',
      padding: 25
    },
    title: {
      fontSize: '2rem',
      fontWeight: 200,
      color: '#216e82',
      margin: 0,
      marginLeft: 20
    },
    orangeSpan: {
      color: '#ff8c56'
    },
    booksContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'overlay',
      overflowY: 'hidden'
    },
    progressOverlay: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      background: 'rgba(1,1,1,0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      pointerEvents: 'none'
    },
    progressText: {
      color: '#fff',
      fontSize: '2rem'
    }
  };

  return (
    <div onMouseDown={() => changestate(false)} style={styles.contentContainer}>
      <div style={styles.modalContainer}>
        <h2 style={styles.title}>
          Progress by book<span style={styles.orangeSpan}>.</span>
        </h2>
        <div style={styles.booksContainer}>
          {books.books.length > 0
            ? books.books.map(book => {
                const pagesRead = book.pagesRead ? book.pagesRead : 0;
                const prop = pagesRead / book.numPages;
                return (
                  <div style={{ position: 'relative', margin: 25 }}>
                    <Book
                      addBook={false}
                      id={book.bookId}
                      bookTitle={book.bookTitle}
                      image={book.coverArt}
                      key={uuid.v4()}
                      hoverEffect={false}
                      styling={{ margin: 0 }}
                    />
                    <div
                      style={{
                        ...styles.progressOverlay,
                        height: `${Math.round(prop * 100)}%`
                      }}
                    >
                      <p
                        style={{
                          color: prop > 0.2 ? '#fff' : '#216e82',
                          fontSize: '2rem',
                          position: prop > 0.2 ? 'relative' : 'absolute'
                        }}
                      >
                        {`${Math.round(prop * 100)}%`}
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ReadingModal;
