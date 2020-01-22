import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import AddBookDetails from "components/books/AddBookDetails";
import AddBookSearch from "components/books/AddBookSearch";

const styles = {
  contentContainer: {
    height: "100%",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "row"
  },
  contentLeft: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column"
  },
  contentRight: {
    height: "100%",
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
        <div style={styles.contentLeft}>
          <h1 style={styles.title}>Add Book.</h1>
          <AddBookSearch />
        </div>
        <div style={styles.contentRight}>
          <AddBookDetails />
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
