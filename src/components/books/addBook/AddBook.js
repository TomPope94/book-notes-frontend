import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import {
  BOOKS_HOME,
  BOOKS_ADD,
  BOOKS_MANUAL,
  BOOKS_SEARCH
} from "constants/routes";

import Breadcrumb from "components/nav/Breadcrumb";

const styles = {
  contentContainer: {
    height: "95%",
    color: "rgba(34, 38, 65, 0.75)",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column"
  },
  addBookChoices: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  contentHalf: {
    width: "25%",
    padding: 25,
    cursor: "pointer",
    borderRadius: 15,
    boxShadow: "0 2px 5px #8a8fad"
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
        <Breadcrumb routes={{ BOOKS_HOME, BOOKS_ADD }} />
        <h1 style={styles.title}>Add Book.</h1>
        <div style={styles.addBookChoices}>
          <div
            style={styles.contentHalf}
            onClick={() => history.push(BOOKS_SEARCH.route)}
          >
            <h1>Search</h1>
            <p>Find the exact book you're looking for by author or ISBN</p>
          </div>
          <div
            style={styles.contentHalf}
            onClick={() => history.push(BOOKS_MANUAL.route)}
          >
            <h1>Manual Entry</h1>
            <p>Enter the details yourself</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
