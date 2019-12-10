import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { searchBooks } from "actions/books/books";

import AddBookSearchResults from "components/books/AddBookSearchResults";

import FormInput from "components/elements/FormInput";
import FormButton from "components/elements/FormButton";

const styles = {
  title: {
    fontSize: "1.5rem",
    color: "#222641",
    marginBottom: 20
  },
  searchForm: {
    display: "flex",
    flexDirection: "column"
  }
};

const AddBookSearch = ({ searchBooks }) => {
  const [searching, setSearching] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    author: ""
  });
  const { title, author } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    searchBooks(title, author);
    setSearching(false);
  };

  let toRender;
  if (searching) {
    toRender = (
      <Fragment>
        <h2 style={styles.title}>Search for book:</h2>
        <form style={styles.searchForm} onSubmit={e => handleSubmit(e)}>
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={e => handleChange(e)}
            placeholder="Title"
          />
          <FormInput
            type="text"
            name="author"
            value={author}
            onChange={e => handleChange(e)}
            placeholder="Author(s)"
          />
          <FormButton type="submit">Search</FormButton>
        </form>
      </Fragment>
    );
  } else {
    toRender = (
      <Fragment>
        <h1>Search Results!</h1>
        <FormButton onClick={() => setSearching(true)}>Search Again</FormButton>
        <AddBookSearchResults />
      </Fragment>
    );
  }

  return <div>{toRender}</div>;
};

export default connect(null, { searchBooks })(AddBookSearch);
