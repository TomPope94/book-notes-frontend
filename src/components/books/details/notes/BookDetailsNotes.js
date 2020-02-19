import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { updateNotes } from 'actions/books/notes';

import MarkdownEditor from 'components/books/details/notes/MarkdownEditor';

const styles = {
  title: {
    color: 'rgba(34, 38, 65, 0.75)',
    fontWeight: 200
  }
};
const initialValue = [
  {
    children: [
      {
        text: 'This is editable plain text!',
        marks: []
      }
    ]
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
      ? selectedBook.bookNotes
      : {
          notesCreated: moment().format('YYYYMMDD'),
          notesContent: value,
          notesLastEdited: null,
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
      <h1 style={styles.title}>Make your notes:</h1>
      <MarkdownEditor value={value} changevalue={setValue} />
      <button onClick={handleSave}>Save</button>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { updateNotes })(BookDetailsNotes);
