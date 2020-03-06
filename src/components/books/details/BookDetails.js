import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import anime from 'animejs';

import { editBook, getBook, resetBook } from 'actions/books/books';

import { BOOKS_HOME, BOOKS_DETAILS } from 'constants/routes';

import Breadcrumb from 'components/nav/Breadcrumb';
import BookReading from 'components/books/details/BookReading';
import BookCreated from 'components/books/details/BookCreated';
import BookPlanned from 'components/books/details/BookPlanned';
import FormInput from 'components/elements/FormInput';
import Loader from 'components/elements/Loader';
import BookEditDropdown from 'components/books/details/BookEditDropdown';

const styles = {
  contentContainer: {
    pointerEvents: 'all',
    display: 'flex',
    flexDirection: 'column'
  },
  topLineContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  titleContainer: {
    width: '50%'
  },
  dropDownWholeContainer: {
    position: 'relative'
  },
  dotsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    marginTop: 10,
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  editDot: {
    width: 5,
    height: 5,
    margin: 2,
    borderRadius: '50%',
    background: '#004757',
    border: '1px solid #004757'
  },
  byRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  editDropdown: {
    width: 150,
    height: 150,
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    right: 0,
    zIndex: 3
  },
  hiddenClick: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(1,1,1,0.1)',
    zIndex: 2,
    height: '100vh',
    width: '100vw'
  }
};

const BookDetails = ({
  selectedBook,
  loading,
  editBook,
  getBook,
  resetBook
}) => {
  const [bookData, setBookData] = useState({
    bookTitle: '',
    bookAuthor: '',
    numPages: '',
    categories: '',
    bookLanguage: '',
    coverArt: '',
    bookState: ''
  });
  const { bookTitle, bookAuthor } = bookData;
  const { id } = useParams();

  useEffect(() => {
    getBook(id);

    return () => {
      resetBook();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const animateDropDown = direction => {
    const animateDirection = direction ? 'reverse' : 'normal';

    anime
      .timeline({
        direction: animateDirection
      })
      .add({
        targets: '.editDropdown',
        scaleX: [0, 1],
        duration: 500
      })
      .add(
        {
          targets: '.editDot',
          easing: 'linear',
          background: ['rgb(0,71,87)', '#fff'],
          duration: 250
        },
        [0]
      );
  };
  const handleClick = async () => {
    await animateDropDown(dropdown);

    setDropdown(!dropdown);
  };

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
  } else if (selectedBook.bookState === 'Created') {
    bookStateRender = <BookCreated />;
  } else if (selectedBook.bookState === 'Planned') {
    bookStateRender = <BookPlanned />;
  } else if (selectedBook.bookState === 'Reading') {
    bookStateRender = <BookReading />;
  } else if (selectedBook.bookState === 'Completed') {
    bookStateRender = (
      <Fragment>
        <h1>Read but needs notes</h1>
      </Fragment>
    );
  } else if (selectedBook.bookState === 'Notated') {
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
        <div style={styles.topLineContainer}>
          <div style={styles.titleContainer}>
            <FormInput
              type="text"
              value={bookTitle}
              name="bookTitle"
              onChange={e => handleChange(e)}
              onBlur={() => handleBlur()}
              styling={{
                width: '100%',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                borderBottom: 'none',
                fontSize: '2.5rem',
                color: '#216e82',
                fontWeight: 200
              }}
            />
            <div style={styles.byRow}>
              <h2
                style={{
                  fontSize: '1.5rem',
                  margin: '0px 1rem 0px 100px',
                  color: '#216e82'
                }}
              >
                By:
              </h2>
              <FormInput
                type="text"
                value={
                  typeof bookAuthor === 'string'
                    ? bookAuthor
                    : bookAuthor.join(', ')
                }
                name="bookAuthor"
                onChange={e => handleChange(e)}
                onBlur={() => handleBlur()}
                styling={{
                  width: '90%',
                  margin: 0,
                  borderBottom: 'none',
                  fontSize: '1.5rem',
                  color: '#216e82'
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
      <Breadcrumb routes={{ BOOKS_HOME, BOOKS_DETAILS }} />
      {dropdown ? (
        <div style={styles.hiddenClick} onClick={() => handleClick()}></div>
      ) : null}
      <div style={styles.contentContainer}>
        {loading ? <Loader /> : toRender}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  loading: state.books.loading
});

export default connect(mapStateToProps, { editBook, getBook, resetBook })(
  BookDetails
);
