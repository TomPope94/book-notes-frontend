import React, { Fragment, useState } from 'react';

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

const BookDetailsNotes = () => {
  const [value, setValue] = useState(initialValue);
  console.log(value);
  const handleSave = async () => {
    debugger;
  };

  return (
    <Fragment>
      <h1 style={styles.title}>Make your notes:</h1>
      <MarkdownEditor value={value} changevalue={setValue} />
      <button onClick={handleSave}>Save</button>
    </Fragment>
  );
};

export default BookDetailsNotes;
