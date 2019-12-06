import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import { addTracking } from 'actions/books/tracker';

const AddProgressForm = ({ addTracking, selectedBook }) => {
  const [formData, setFormData] = useState({
    date: '',
    numPages: 0
  });
  const { date, numPages } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(typeof numPages);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    await addTracking(
      selectedBook.bookId,
      formData,
      selectedBook.bookProgression.pagesRead
    );
  };

  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="date"
          name="date"
          value={date}
          onChange={e => handleChange(e)}
        />
        <input
          type="number"
          name="numPages"
          value={numPages}
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
