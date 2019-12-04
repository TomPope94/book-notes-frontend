import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const BookDetailsProgress = ({ selectedBook }) => {
  if (selectedBook) {
    const currentProgress =
      ((selectedBook.bookProgression.pagesRead + 40) / selectedBook.numPages) *
      100;
    debugger;
  }
  return (
    <Fragment>
      <h1>Your Progress:</h1>
      <button>Edit</button>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps)(BookDetailsProgress);
