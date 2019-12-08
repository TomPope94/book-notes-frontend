import React, { useState, Fragment, useContext } from 'react';
import { connect } from 'react-redux';

import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import { addTracking } from 'actions/books/tracker';

const AddProgressForm = ({ addTracking, selectedBook }) => {
  const trackerContext = useContext(TrackerContext);
  const { state, changeState } = trackerContext;

  const handleChange = e => {
    changeState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    await addTracking(
      selectedBook.bookId,
      state,
      selectedBook.bookProgression.pagesRead
    );
    changeState({ ...state, showForm: false });
  };

  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="date"
          name="date"
          value={state.dateSelected}
          onChange={e => handleChange(e)}
        />
        <input
          type="number"
          name="numPages"
          value={state.numPages}
          onChange={e => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
      <input type="checkbox" />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { addTracking })(AddProgressForm);
