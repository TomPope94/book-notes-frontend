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
      height: '60%',
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0 2px 3px rgba(1,1,1,0.2)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    progressOverlay: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      background: 'rgba(1,1,1,0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    progressText: {
      color: '#fff',
      fontSize: '2rem'
    }
  };

  return (
    <div onMouseDown={() => changestate(false)} style={styles.contentContainer}>
      <div style={styles.modalContainer}>
        {books.books.length > 0
          ? books.books.map(book => {
              const prop = 100 / book.numPages;
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
  );
};

export default ReadingModal;
