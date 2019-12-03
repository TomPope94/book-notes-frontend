import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { deleteBook, editBook } from "actions/books";

import { BOOKS_HOME } from "constants/routes";

import FormInput from "components/elements/FormInput";
import BookDetailsProgress from "components/books/BookDetailsProgress";
import BookDetailsComplete from "components/books/BookDetailsComplete";
import BookDetailsNotes from "components/books/BookDetailsNotes";

const styles = {
  pageContainer: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(1,1,1,0.2)"
  },
  contentContainer: {
    width: "80%",
    height: "80%",
    border: "3px solid #f38b66",
    boxShadow: "0 2px 5px #222641",
    background: "#fff",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "row",
    paddingRight: 25
  },
  container: {
    width: "50%",
    height: "100%",
    paddingTop: 25
  },
  byRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
};

const BookDetails = ({ selectedBook, deleteBook, editBook }) => {
  const [redirect, setRedirect] = useState(false);
  const [bookData, setBookData] = useState({
    bookTitle: "",
    bookAuthor: "",
    numPages: "",
    categories: "",
    bookLanguage: "",
    coverArt: ""
  });
  const {
    bookTitle,
    bookAuthor,
    numPages,
    categories,
    bookLanguage,
    coverArt
  } = bookData;
  const [viewProgress, setViewProgress] = useState(true);
  useEffect(() => {
    if (selectedBook) {
      setBookData({
        bookTitle: selectedBook.bookTitle,
        bookAuthor: selectedBook.bookAuthor,
        numPages: selectedBook.numPages,
        categories: selectedBook.categories,
        bookLanguage: selectedBook.bookLanguage,
        coverArt: selectedBook.coverArt
      });
    }
  }, [selectedBook]);

  const history = useHistory();

  const handleDelete = async () => {
    await deleteBook(selectedBook.bookId);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={BOOKS_HOME} />;
  }

  const handleChange = e => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };
  const handleBlur = async () => {
    if (changeCheck) {
      await editBook(selectedBook.bookId, bookData);
    }
  };

  let changeCheck = false;
  if (selectedBook) {
    const stateVals = Object.values(bookData);
    const originalVals = Object.values(selectedBook);

    if (!stateVals.every(v => originalVals.indexOf(v) !== -1)) {
      changeCheck = true;
    } else {
      changeCheck = false;
    }
  }

  let toRender;
  if (!selectedBook) {
    toRender = (
      <Fragment>
        <h1>{"No book selected"}</h1>
      </Fragment>
    );
  } else {
    toRender = (
      <Fragment>
        <div style={styles.container} />
        <div style={styles.container}>
          <FormInput
            type="text"
            value={bookTitle}
            name="bookTitle"
            onChange={e => handleChange(e)}
            onBlur={() => handleBlur()}
            styling={{
              width: "100%",
              borderBottom: "3px solid #22264140",
              marginBottom: "1rem"
            }}
          />
          <div style={styles.byRow}>
            <h2 style={{ width: "10%" }}>By:</h2>
            <FormInput
              type="text"
              value={bookAuthor}
              name="bookAuthor"
              onChange={e => handleChange(e)}
              onBlur={() => handleBlur()}
              styling={{
                width: "90%",
                borderBottom: "3px solid #22264140",
                margin: 0
              }}
            />
          </div>
          <button onClick={() => setViewProgress(!viewProgress)}>
            Change View
          </button>
          {viewProgress ? <BookDetailsProgress /> : <BookDetailsNotes />}
          <button onClick={() => handleDelete()}>Delete Test</button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div
        style={{ ...styles.pageContainer, cursor: "pointer" }}
        onClick={() => history.push(BOOKS_HOME)}
      />
      <div style={{ ...styles.pageContainer, pointerEvents: "none" }}>
        <div style={styles.contentContainer}>{toRender}</div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { deleteBook, editBook })(BookDetails);
