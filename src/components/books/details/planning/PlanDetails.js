import React, { useContext, useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { DayPickedContext } from 'components/books/details/planning/dayPicked-context';

import { editBook } from 'actions/books/books';

import DateChosen from 'components/books/details/planning/DateChosen';
import { PRODUCT_HOME } from 'constants/routes';

const styles = {
  detailsContainter: {
    width: '40%',
    minHeight: 500,
    marginLeft: 20,
    marginRight: 20,
    color: 'rgba(34, 38, 65, 0.75)',
    position: 'relative'
  },
  startNowButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    cursor: 'pointer'
  }
};

const PlanDetails = ({ selectedBook, books, user, editBook }) => {
  const pickedContext = useContext(DayPickedContext);
  const { dateChosen, plannedDate } = pickedContext.state;
  const [datePassed, setDatePassed] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (dateChosen) {
      const dateBefore = moment(dateChosen, 'YYYYMMDD').isBefore(moment());
      if (dateBefore) {
        setDatePassed(true);
      } else {
        setDatePassed(false);
      }
    }
  }, [dateChosen]);

  const readingBooks = books.rawBooks.filter(
    book => book.bookState === 'Reading'
  );
  const bookCount = readingBooks.length;

  const handleClick = async newState => {
    if (bookCount >= user.attributes.bookLimit) {
      history.push(PRODUCT_HOME.route);
    } else {
      if (selectedBook) {
        await editBook(selectedBook.bookId, {
          ...selectedBook,
          bookState: newState
        });
      }
    }
  };

  const dayDiff = moment(dateChosen, 'YYYYMMDD').diff(moment(), 'days') + 1;

  return (
    <div style={styles.detailsContainter}>
      <h1>
        {!plannedDate ? (
          "It looks like we're missing a start date!"
        ) : (
          <DateChosen date={dateChosen} />
        )}
      </h1>
      {datePassed ? (
        <h2 onClick={() => handleClick('Reading')}>Start reading?</h2>
      ) : (
        <Fragment>
          <h2>
            {dayDiff} day{dayDiff === 1 ? null : 's'} left
          </h2>
          <h3
            style={styles.startNowButton}
            onClick={() => handleClick('Reading')}
          >
            Or start reading now?
          </h3>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  selectedBook: state.books.selectedBook,
  user: state.user
});

export default connect(mapStateToProps, { editBook })(PlanDetails);
