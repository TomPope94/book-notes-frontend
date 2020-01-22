import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

import { listBooks, resetBooks } from "actions/books/books";

import { BOOKS_ADD } from "constants/routes";

import Book from "components/elements/Book";
import Loader from "components/elements/Loader";
import LibraryFilter from "components/books/LibraryFilter";

const styles = {
  library: {
    color: "rgba(34, 38, 65, 0.75)"
  },
  libraryHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  catalog: {
    display: "flex",
    flexDirection: "row",
    overflowX: "overlay",
    overflowY: "hidden"
  },
  groupUnderline: {
    width: "100%",
    height: 1,
    background: "linear-gradient(to right, #222641, transparent)",
    position: "absolute"
  },
  libraryHeaderLeft: {
    display: "flex",
    alignItems: "center"
  },
  libraryTitle: {
    marginRight: 10
  },
  subHeading: {
    fontWeight: 200
  }
};

const BooksHome = ({ listBooks, resetBooks, books }) => {
  useEffect(() => {
    listBooks(books.filter);

    return () => {
      resetBooks();
    };
  }, [listBooks]);

  // loop through array to create a row for each element
  // loop through each element to create books for each row
  const generateGroups = booksData => {
    const groupArr = [];
    for (let i = 0; i < booksData.length; i++) {
      const books = generateBooks(booksData[i]);
      const group = (
        <div key={uuid.v4()}>
          <h2 style={styles.subHeading}>{booksData[i].name}</h2>
          <span style={styles.groupUnderline} />
          <div style={styles.catalog} key={uuid.v4()}>
            {books}
          </div>
        </div>
      );
      groupArr.push(group);
    }
    return groupArr;
  };

  const generateBooks = group => {
    const booksArr = [];
    for (let i = 0; i < group.books.length; i++) {
      const book = (
        <Book
          addBook={false}
          id={group.books[i].bookId}
          bookTitle={group.books[i].bookTitle}
          key={uuid.v4()}
        />
      );
      booksArr.push(book);
    }
    return booksArr;
  };

  const renderGroups =
    books.books.length > 0 ? generateGroups(books.books) : null;

  return books.loading ? (
    <Loader />
  ) : (
    <div>
      <div style={styles.library}>
        <div style={styles.libraryHeader}>
          <div style={styles.libraryHeaderLeft}>
            <h1 style={styles.libraryTitle}>My Library.</h1>
            <Link to={BOOKS_ADD.route}>Add</Link>
          </div>
          <LibraryFilter />
        </div>
        <div>{renderGroups}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { listBooks, resetBooks })(BooksHome);
