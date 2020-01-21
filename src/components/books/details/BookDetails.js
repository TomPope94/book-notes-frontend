import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import anime from "animejs";

import { editBook } from "actions/books/books";

import { BOOKS_HOME } from "constants/routes";

import BookReading from "components/books/details/BookReading";
import BookCreated from "components/books/details/BookCreated";
import BookPlanned from "components/books/details/BookPlanned";
import FormInput from "components/elements/FormInput";
import Loader from "components/elements/Loader";
import BookEditDropdown from "components/books/details/BookEditDropdown";

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
    width: "90%",
    height: "75%",
    borderTop: "20px solid #f38b66",
    boxShadow: "0 2px 5px #222641",
    background: "#fff",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 50,
    borderRadius: 10
  },
  topLineContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  titleContainer: {
    width: "50%",
    marginLeft: 270
  },
  dropDownWholeContainer: {
    position: "relative"
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: 10,
    marginTop: 10,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10
  },
  editDot: {
    width: 5,
    height: 5,
    margin: 2,
    borderRadius: "50%",
    background: "#004757",
    border: "1px solid #004757"
  },
  coverContainer: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "#fff",
    border: "2px solid rgb(243,139,102)",
    position: "absolute",
    top: -120,
    left: 50
  },
  byRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  editDropdown: {
    width: 150,
    height: 150,
    transform: "scaleX(0)",
    transformOrigin: "right",
    position: "absolute",
    pointerEvents: "none",
    top: 0,
    right: 0,
    zIndex: 3
  },
  hiddenClick: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "rgba(1,1,1,0.1)",
    zIndex: 2,
    height: "100vh",
    width: "100vw"
  }
};

const BookDetails = ({ selectedBook, loading, editBook }) => {
  const [redirect, setRedirect] = useState(false);
  const [bookData, setBookData] = useState({
    bookTitle: "",
    bookAuthor: "",
    numPages: "",
    categories: "",
    bookLanguage: "",
    coverArt: "",
    bookState: ""
  });
  const {
    bookTitle,
    bookAuthor,
    numPages,
    categories,
    bookLanguage,
    coverArt,
    bookState
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
        coverArt: selectedBook.coverArt,
        bookState: selectedBook.bookState
      });
    }
  }, [selectedBook]);
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();

  const animateDropDown = direction => {
    const animateDirection = direction ? "reverse" : "normal";

    anime
      .timeline({
        direction: animateDirection
      })
      .add({
        targets: ".editDropdown",
        scaleX: [0, 1],
        duration: 500
      })
      .add(
        {
          targets: ".editDot",
          easing: "linear",
          background: ["rgb(0,71,87)", "#fff"],
          duration: 250
        },
        [0]
      );
  };
  const handleClick = async () => {
    await animateDropDown(dropdown);

    setDropdown(!dropdown);
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

  let bookStateRender;
  if (!selectedBook || loading) {
    bookStateRender = null;
  } else if (selectedBook.bookState === "Created") {
    bookStateRender = <BookCreated />;
  } else if (selectedBook.bookState === "Planned") {
    bookStateRender = <BookPlanned />;
  } else if (selectedBook.bookState === "Reading") {
    bookStateRender = <BookReading />;
  } else if (selectedBook.bookState === "Completed") {
    bookStateRender = (
      <Fragment>
        <h1>Read but needs notes</h1>
      </Fragment>
    );
  } else if (selectedBook.bookState === "Notated") {
    bookStateRender = (
      <Fragment>
        <h1>All finished</h1>
      </Fragment>
    );
  } else {
    bookStateRender = null;
  }

  let toRender;
  if (!selectedBook || loading) {
    toRender = (
      <Fragment>
        <Loader />
      </Fragment>
    );
  } else {
    toRender = (
      <Fragment>
        <div style={styles.coverContainer} />
        <div style={styles.topLineContainer}>
          <div style={styles.titleContainer}>
            <FormInput
              type="text"
              value={bookTitle}
              name="bookTitle"
              onChange={e => handleChange(e)}
              onBlur={() => handleBlur()}
              styling={{
                width: "100%",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                borderBottom: "none",
                fontSize: "2.5rem",
                color: "rgba(34,38,65,0.75)"
              }}
            />
            <div style={styles.byRow}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  margin: 0,
                  margin: "0px 1rem 0px 100px",
                  color: "rgba(34,38,65,0.75)"
                }}
              >
                By:
              </h2>
              <FormInput
                type="text"
                value={bookAuthor}
                name="bookAuthor"
                onChange={e => handleChange(e)}
                onBlur={() => handleBlur()}
                styling={{
                  width: "90%",
                  margin: 0,
                  borderBottom: "none",
                  fontSize: "1.5rem",
                  color: "rgba(34,38,65,0.75)"
                }}
              />
            </div>
          </div>
          <div style={styles.dropDownWholeContainer}>
            <div style={styles.dotsContainer} onClick={() => handleClick()}>
              <div style={styles.editDot} className="editDot"></div>
              <div style={styles.editDot} className="editDot"></div>
              <div style={styles.editDot} className="editDot"></div>
            </div>
            <div style={styles.editDropdown} className="editDropdown">
              <BookEditDropdown bookId={selectedBook.bookId} />
            </div>
          </div>
        </div>
        {bookStateRender}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {dropdown ? (
        <div style={styles.hiddenClick} onClick={() => handleClick()}></div>
      ) : null}
      <div
        style={{ ...styles.pageContainer, cursor: "pointer" }}
        onClick={() => history.push(BOOKS_HOME)}
      />
      <div style={{ ...styles.pageContainer, pointerEvents: "none" }}>
        <div style={styles.contentContainer}>
          {loading ? <Loader /> : toRender}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  loading: state.books.loading
});

export default connect(mapStateToProps, { editBook })(BookDetails);
