import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { updateNotes } from 'actions/books/notes';

import MarkdownEditor from 'components/books/details/notes/MarkdownEditor';

const styles = {
  title: {
    color: '#216e82',
    fontWeight: 200,
    marginRight: 50
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  orangeSpan: {
    color: '#ff8c56'
  }
};
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }]
  }
];

const BookDetailsNotes = ({ updateNotes, selectedBook }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (selectedBook.bookNotes) {
      setValue(selectedBook.bookNotes.notesContent);
    }
  }, [selectedBook.bookNotes]);

  const handleSave = async () => {
    const currentNotes = selectedBook.bookNotes
      ? {
          ...selectedBook.bookNotes,
          notesLastEdited: moment().format('YYYYMMDD'),
          notesNumEdited: selectedBook.bookNotes.notesNumEdited + 1
        }
      : {
          notesCreated: moment().format('YYYYMMDD'),
          notesContent: value,
          notesLastEdited: moment().format('YYYYMMDD'),
          notesNumEdited: 0
        };

    const newNotesObj = {
      ...currentNotes,
      notesContent: value
    };

    await updateNotes(newNotesObj, selectedBook.bookId);
  };

  return (
    <Fragment>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>
          Make your notes<span style={styles.orangeSpan}>:</span>
        </h1>
        <button onClick={handleSave}>Save</button>
      </div>
      <MarkdownEditor
        value={value}
        changevalue={setValue}
        handlesave={handleSave}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { updateNotes })(BookDetailsNotes);
