import React, { Fragment } from 'react';

import MarkdownEditor from 'components/books/details/notes/MarkdownEditor';

const styles = {
  title: {
    color: 'rgba(34, 38, 65, 0.75)',
    fontWeight: 200
  }
};

const BookDetailsNotes = () => {
  return (
    <Fragment>
      <h1 style={styles.title}>Make your notes:</h1>
      <MarkdownEditor />
    </Fragment>
  );
};

export default BookDetailsNotes;
