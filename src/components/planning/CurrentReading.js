import React, { useState } from 'react';
import ReadingModal from 'components/planning/ReadingModal';

const styles = {
  readingTotalContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  totalPages: {
    cursor: 'pointer'
  }
};

const CurrentReading = ({ books }) => {
  const [readingModal, setReadingModal] = useState(false);
  const readingBooks =
    books.books.length > 0
      ? books.books.filter(book => book.name === 'Reading')[0]
      : null;

  // Calculate sum of pages in books
  // Calculate sum of pages read
  // Create modal to house the book progression viz
  let toRender;
  if (readingBooks) {
    const pagesArr = [];
    readingBooks.books.map(book => {
      pagesArr.push(book.numPages);
    });

    const pagesTotal = pagesArr.reduce((total, num) => total + num);
    toRender = (
      <div style={styles.readingTotalContainer}>
        <h3
          onMouseDown={() => setReadingModal(!readingModal)}
          style={styles.totalPages}
        >{`Currently read x/${pagesTotal} pages`}</h3>
      </div>
    );
  } else {
    toRender = <h3>No books :(</h3>;
  }

  return (
    <div>
      {toRender}
      {readingModal ? (
        <ReadingModal books={readingBooks} changestate={setReadingModal} />
      ) : null}
    </div>
  );
};

export default CurrentReading;
