import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { addBook } from "actions/books/books";

import FormInput from "components/elements/FormInput";
import FormButton from "components/elements/FormButton";

const styles = {
  title: {
    fontSize: "1.5rem",
    color: "#222641",
    marginBottom: 20
  },
  formStyle: {
    display: "flex",
    flexDirection: "column"
  }
};

const AddBookDetails = ({ addBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    cover: "",
    categories: "",
    pageCount: "",
    language: ""
  });
  const { title, author, cover, categories, pageCount, language } = formData;
  const history = useHistory();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await addBook(formData);
    history.push("/books");
  };

  return (
    <div>
      <h2 style={styles.title}>Book Details:</h2>
      <form style={styles.formStyle} onSubmit={e => handleSubmit(e)}>
        <FormInput
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={e => handleChange(e)}
        />
        <FormInput
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={e => handleChange(e)}
        />
        <FormInput
          type="text"
          placeholder="Cover"
          name="cover"
          value={cover}
          onChange={e => handleChange(e)}
        />
        <FormInput
          type="text"
          placeholder="Categories"
          name="categories"
          value={categories}
          onChange={e => handleChange(e)}
        />
        <FormInput
          type="number"
          placeholder="Page Count"
          name="pageCount"
          value={pageCount}
          onChange={e => handleChange(e)}
        />
        <FormInput
          type="text"
          placeholder="Language"
          name="language"
          value={language}
          onChange={e => handleChange(e)}
        />
        <FormButton type="submit">Add</FormButton>
      </form>
    </div>
  );
};

export default connect(null, { addBook })(AddBookDetails);
