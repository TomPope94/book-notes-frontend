import React, { useState } from "react";
import { connect } from "react-redux";

import { changeFilter, resetBooks, listBooks } from "actions/books/books";

const styles = {
  filterContainer: {
    position: "fixed",
    right: 20,
    top: "10vh",
    background: "#fff",
    boxShadow: "0 1px 5px rgba(1,1,1,0.2)",
    padding: 15,
    borderRadius: 10,
    zIndex: 5
  },
  radioButton: {
    cursor: "pointer",
    marginRight: 10,
    marginLeft: 10
  }
};

const LibraryFilter = ({ changeFilter, resetBooks, listBooks, filter }) => {
  const [radio, setRadio] = useState(filter);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleChange = async newState => {
    await setRadio(newState);

    changeFilter(newState);
    resetBooks();
    await delay(500);
    listBooks(newState);
  };

  return (
    <div style={styles.filterContainer}>
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
