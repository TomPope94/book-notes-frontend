import React, { useState } from "react";
import { connect } from "react-redux";

import { changeFilter, resetBooks, listBooks } from "actions/books/books";

const styles = {
  radioButton: {
    cursor: "pointer",
    marginRight: 10,
    marginLeft: 10
  }
};

const LibraryFilter = ({ changeFilter, resetBooks, listBooks, filter }) => {
  const [radio, setRadio] = useState(filter);

  const handleChange = async newState => {
    await setRadio(newState);

    changeFilter(newState);
    resetBooks();
    listBooks(newState);
  };

  return (
    <div>
      <h3>Group By:</h3>
      <form>
        <label style={styles.radioButton}>
          <input
            type="radio"
            name="bookFilter"
            value="bookState"
            checked={radio === "bookState"}
            onChange={() => handleChange("bookState")}
          />
          Status
        </label>
        <label style={styles.radioButton}>
          <input
            type="radio"
            name="bookFilter"
            value="categories"
            checked={radio === "categories"}
            onChange={() => handleChange("categories")}
          />
          Category
        </label>
        <label style={styles.radioButton}>
          <input
            type="radio"
            name="bookFilter"
            value="bookAuthor"
            checked={radio === "bookAuthor"}
            onChange={() => handleChange("bookAuthor")}
          />
          Author
        </label>
        <label style={styles.radioButton}>
          <input
            type="radio"
            name="bookFilter"
            value="bookLanguage"
            checked={radio === "bookLanguage"}
            onChange={() => handleChange("bookLanguage")}
          />
          Language
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.books.filter
});

export default connect(mapStateToProps, {
  changeFilter,
  resetBooks,
  listBooks
})(LibraryFilter);
