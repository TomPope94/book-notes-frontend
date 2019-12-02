import React from 'react';

import FormInput from 'components/elements/FormInput';
import FormButton from 'components/elements/FormButton';

const styles = {
  title: {
    fontSize: '1.5rem',
    color: '#222641',
    marginBottom: 20
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column'
  }
};

const AddBookDetails = () => {
  return (
    <div>
      <h2 style={styles.title}>Book Details:</h2>
      <form style={styles.formStyle}>
        <FormInput type="text" placeholder="Title" />
        <FormInput type="text" placeholder="Author" />
        <FormInput type="text" placeholder="Cover" />
        <FormInput type="text" placeholder="Categories" />
        <FormInput type="text" placeholder="Page Count" />
        <FormInput type="text" placeholder="Language" />
        <FormButton type="submit">Add</FormButton>
      </form>
    </div>
  );
};

export default AddBookDetails;
