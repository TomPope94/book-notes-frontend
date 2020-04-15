import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteBook, editBook } from 'actions/books/books';

const styles = {
  dropdownContainer: {
    background: '#fff',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 15,
    pointerEvents: 'all',
    borderRadius: 10,
  },
  dropdownOption: {
    cursor: 'pointer',
  },
};

const BookEditDropdown = ({ deleteBook, editBook, bookId, selectedBook }) => {
  const history = useHistory();

  const handleDelete = async (bookId) => {
    await deleteBook(bookId);
    history.push('/books');
  };

  return (
    <div style={styles.dropdownContainer}>
      <p
        style={styles.dropdownOption}
        onClick={() =>
          editBook(bookId, { ...selectedBook, bookState: 'Completed' })
        }
      >
        Already Finished?
      </p>
      <p style={styles.dropdownOption}>Change Status</p>
      <p style={styles.dropdownOption}>Edit Book</p>
      <p style={styles.dropdownOption} onClick={() => handleDelete(bookId)}>
        Delete
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedBook: state.books.selectedBook,
});

export default connect(mapStateToProps, { deleteBook, editBook })(
  BookEditDropdown
);
