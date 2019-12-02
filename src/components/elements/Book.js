import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { BOOKS_ADD, BOOKS_DETAILS } from "constants/routes";
import { getBook } from "actions/books";

const Book = ({ id, bookTitle, addBook, getBook }) => {
  const styles = {
    book: {
      boxShadow: "0 1px 3px #222641",
      cursor: "pointer",
      height: 300,
      width: 200,
      margin: 50
    },
    addBook: {
      border: "1px solid #f38b66",
      background: "#fff"
    },
    existingBook: {
      background: "#f38b66"
    }
  };

  const history = useHistory();

  const openBook = () => {
    getBook(id);

    history.push(BOOKS_DETAILS);
  };

  const bookType = addBook ? (
    <Link to={BOOKS_ADD}>
      <div style={{ ...styles.book, ...styles.addBook }} />
    </Link>
  ) : (
    // <Link to={BOOKS_DETAILS}>
    <div
      style={{ ...styles.book, ...styles.existingBook }}
      onClick={() => openBook()}
    >
      <p>{bookTitle}</p>
    </div>
    // </Link>
  );

  return <Fragment>{bookType}</Fragment>;
};

export default connect(null, { getBook })(Book);
