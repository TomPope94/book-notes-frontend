import React, { useEffect } from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import { listBooks } from "actions/books";

import Book from "components/elements/Book";

const styles = {
  library: {
    paddingLeft: 50,
    paddingRight: 50
  },
  catalog: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

const BooksHome = ({ listBooks, books }) => {
  useEffect(() => {
    listBooks();
  }, [listBooks]);

  const bookRender = books.map(book => (
    <Book
      addBook={false}
      id={book.bookId}
      bookTitle={book.bookTitle}
      key={uuid.v4()}
    />
  ));

  return (
    <div style={styles.library}>
      <h1>My Library.</h1>
      <div style={styles.catalog}>
        {bookRender}
        <Book addBook={true} />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.books.books
});

export default connect(mapStateToProps, { listBooks })(BooksHome);
