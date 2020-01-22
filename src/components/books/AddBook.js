import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import AddBookDetails from "components/books/AddBookDetails";
import AddBookSearch from "components/books/AddBookSearch";

const styles = {
  contentContainer: {
    height: "100%",
    color: "rgba(34, 38, 65, 0.75)",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column"
  },
  addBookChoices: {
    display: "flex",
    width: "100%"
  },
  contentLeft: {
    width: "50%",
    display: "flex",
    flexDirection: "column"
  },
  contentRight: {
    width: "50%"
  },
  title: {
    fontSize: "3rem",
    fontWeight: 200
  }
};

const AddBook = () => {
  const history = useHistory();

  return (
    <Fragment>
      <div style={styles.contentContainer}>
        <h1 style={styles.title}>Add Book.</h1>
        <div style={styles.addBookChoices}>
          <div style={styles.contentLeft}>
            <AddBookSearch />
          </div>
          <div style={styles.contentRight}>
            <h1>Enter Details Manually</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
