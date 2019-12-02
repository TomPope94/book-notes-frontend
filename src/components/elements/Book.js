import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BOOKS_ADD } from "constants/routes";

const Book = props => {
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

  const bookType = props.addBook ? (
    <Link to={BOOKS_ADD}>
      <div style={{ ...styles.book, ...styles.addBook }} />
    </Link>
  ) : (
    <div style={{ ...styles.book, ...styles.existingBook }} />
  );

  return <Fragment>{bookType}</Fragment>;
};

export default Book;
