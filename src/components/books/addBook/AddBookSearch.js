import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { searchBooks } from "actions/books/books";

import { BOOKS_HOME, BOOKS_ADD, BOOKS_SEARCH } from "constants/routes";

import AddBookSearchResults from "components/books/addBook/AddBookSearchResults";

import FormInput from "components/elements/FormInput";
import FormButton from "components/elements/FormButton";
import Breadcrumb from "components/nav/Breadcrumb";
import SearchIcon from "components/elements/icons/SearchIcon";

const styles = {
  title: {
    fontSize: "1.5rem",
    color: "#222641",
    marginBottom: 20
  },
  searchForm: {
    display: "flex",
    flexDirection: "column",
    width: "75%"
  },
  searchButtonOuter: {
    width: "10%",
    borderRadius: 10,
    boxShadow: "0 1px 2px #8a8fad",
    cursor: "pointer",
    background: "#fff"
  },
  searchButtonInner: {
    display: "flex",
    alignItems: "center"
  },
  textInputStyle: {
    borderBottom: "1px solid grey"
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
            styling={styles.textInputStyle}
          />
          <FormInput
            type="text"
            name="author"
            value={author}
            onChange={e => handleChange(e)}
            placeholder="Author(s)"
            styling={styles.textInputStyle}
          />
          <div>
            <FormButton type="submit">
              <div style={styles.searchButtonInner}>
                <SearchIcon style={{ height: 50, marginRight: 10 }} />
                Search
              </div>
            </FormButton>
          </div>
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

  return (
    <div>
      <Breadcrumb routes={{ BOOKS_HOME, BOOKS_ADD, BOOKS_SEARCH }} />
      {toRender}
    </div>
  );
};

export default connect(null, { searchBooks })(AddBookSearch);
