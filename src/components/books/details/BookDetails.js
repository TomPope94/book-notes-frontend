import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { deleteBook, editBook } from 'actions/books/books';

import { BOOKS_HOME } from 'constants/routes';
import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import FormInput from 'components/elements/FormInput';
import BookDetailsTracker from 'components/books/details/tracker/BookDetailsTracker';
import BookDetailsNotes from 'components/books/details/notes/BookDetailsNotes';
import Loader from 'components/elements/Loader';

const styles = {
  pageContainer: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(1,1,1,0.2)'
  },
  contentContainer: {
    width: '90%',
    height: '75%',
    borderTop: '20px solid #f38b66',
    boxShadow: '0 2px 5px #222641',
    background: '#fff',
    pointerEvents: 'all',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 25,
    position: 'absolute',
    bottom: 50,
    borderRadius: 10
  },
  titleContainer: {
    width: '50%',
    marginLeft: 270
  },
  sectionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    width: '50%',
    height: '100%',
    paddingTop: 25,
    position: 'relative'
  },
  coverContainer: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    background: '#fff',
    border: '2px solid rgb(243,139,102)',
    position: 'absolute',
    top: -120,
    left: 50
  },
  byRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const BookDetails = ({ selectedBook, loading, deleteBook, editBook }) => {
  const [redirect, setRedirect] = useState(false);
  const [bookData, setBookData] = useState({
    bookTitle: '',
    bookAuthor: '',
    numPages: '',
    categories: '',
    bookLanguage: '',
    coverArt: ''
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
  const [progressReportState, setProgressReportState] = useState({
    showForm: false,
    dateSelected: '',
    numPages: 0
  });
  const changeProgressState = newState => {
    setProgressReportState({ ...progressReportState, ...newState });
  };

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
              color: 'rgba(34,38,65,0.75)'
            }}
          />
          <div style={styles.byRow}>
            <h2
              style={{
                fontSize: '1.5rem',
                margin: 0,
                margin: '0px 1rem 0px 100px',
                color: 'rgba(34,38,65,0.75)'
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
                width: '90%',
                margin: 0,
                borderBottom: 'none',
                fontSize: '1.5rem',
                color: 'rgba(34,38,65,0.75)'
              }}
            />
          </div>
        </div>
        <div style={styles.sectionsContainer}>
          <div style={{ ...styles.container }}>
            <TrackerContext.Provider
              value={{
                state: progressReportState,
                changeState: changeProgressState
              }}
            >
              <BookDetailsTracker />
            </TrackerContext.Provider>
          </div>
          <div style={styles.container}>
            <BookDetailsNotes />
            {/* <button onClick={() => handleDelete()}>Delete Test</button> */}
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div
        style={{ ...styles.pageContainer, cursor: 'pointer' }}
        onClick={() => history.push(BOOKS_HOME)}
      />
      <div style={{ ...styles.pageContainer, pointerEvents: 'none' }}>
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

export default connect(mapStateToProps, { deleteBook, editBook })(BookDetails);
