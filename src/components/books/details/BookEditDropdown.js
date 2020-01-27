import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteBook } from "actions/books/books";

const styles = {
  dropdownContainer: {
    background: "#fff",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    padding: 15,
    pointerEvents: "all",
    borderRadius: 10
  },
  dropdownOption: {
    cursor: "pointer"
  }
};

const BookEditDropdown = ({ deleteBook, bookId }) => {
  const history = useHistory();

  const handleDelete = async bookId => {
    await deleteBook(bookId);
    history.push("/books");
  };

  return (
    <div style={styles.dropdownContainer}>
      <p style={styles.dropdownOption}>Change Status</p>
      <p style={styles.dropdownOption}>Edit Cover</p>
      <p style={styles.dropdownOption}>Edit # Pages</p>
      <p style={styles.dropdownOption} onClick={() => handleDelete(bookId)}>
        Delete
      </p>
    </div>
  );
};

export default connect(null, { deleteBook })(BookEditDropdown);
