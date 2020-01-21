import React, { useEffect } from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import { listBooks, resetBooks } from "actions/books/books";

import Book from "components/elements/Book";
import Loader from "components/elements/Loader";

const styles = {
  library: {
    paddingLeft: 50,
    paddingRight: 50,
    color: "rgba(34, 38, 65, 0.75)"
  },
  catalog: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
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
        <div style={styles.catalog} key={uuid.v4()}>
          <h2 style={styles.subHeading}>{booksData[i].name}</h2>
          {books}
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
    <div style={styles.library}>
      <h1>My Library.</h1>
      <div>{renderGroups}</div>
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { listBooks, resetBooks })(BooksHome);
