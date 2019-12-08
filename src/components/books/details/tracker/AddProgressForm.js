import React, { useState, Fragment, useContext } from 'react';
import { connect } from 'react-redux';

import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import { addTracking } from 'actions/books/tracker';

const styles = {
  navContainer: {
    background: 'rgba(0,0,0,0.25)',
    position: 'absolute',
    cursor: 'pointer'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    background: '#fff',
    boxShadow: '0px 2px 5px grey',
    pointerEvents: 'all'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
};

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
      <div
        style={{ ...styles.formContainer, ...styles.navContainer }}
        onClick={() => changeState({ ...state, showForm: false })}
      />
      <div
        style={{
          ...styles.formContainer,
          background: 'transparent',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 3
        }}
      >
        <form style={styles.formStyle} onSubmit={e => handleSubmit(e)}>
          <div style={styles.inputContainer}>
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
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      <input type="checkbox" />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { addTracking })(AddProgressForm);
