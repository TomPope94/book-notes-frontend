import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import anime from 'animejs';

import Calendar from 'components/elements/images/Calendar';
import StartReading from 'components/elements/images/StartReading';

import { editBook } from 'actions/books/books';
import { PRODUCT_HOME } from 'constants/routes';

const styles = {
  contentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 50
  },
  choiceContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  title: {
    height: '10%',
    fontWeight: 200,
    color: 'rgba(34, 38, 65, 0.75)'
  },
  image: {
    cursor: 'pointer',
    width: '35%',
    borderRadius: 15,
    boxShadow: '0 2px 5px #8a8fad',
    transform: 'scale(1,1)'
  }
};

const BookCreated = ({ selectedBook, books, user, editBook }) => {
  const history = useHistory();

  const readingBooks = books.rawBooks.filter(
    book => book.bookState === 'Reading'
  );
  const bookCount = readingBooks.length;

  const handleClick = async newState => {
    if (newState === 'Reading' && bookCount >= user.attributes.bookLimit) {
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

  const hoverAnimation = (target, mouseHover) => {
    const animateDirection = mouseHover ? 'normal' : 'reverse';

    anime({
      targets: `.${target}`,
      direction: animateDirection,
      duration: 150,
      scaleX: [1, 1.05],
      scaleY: [1, 1.05],
      easing: 'linear'
    });
  };
  return (
    <div style={styles.contentsContainer}>
      <div style={styles.choiceContainer}>
        <Calendar
          className="planBookImage"
          style={styles.image}
          onMouseOver={() => hoverAnimation('planBookImage', true)}
          onMouseOut={() => hoverAnimation('planBookImage', false)}
          onClick={() => handleClick('Planned')}
        />
        <StartReading
          className="startReadingImage"
          style={styles.image}
          onMouseOver={() => hoverAnimation('startReadingImage', true)}
          onMouseOut={() => hoverAnimation('startReadingImage', false)}
          onClick={() => handleClick('Reading')}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  books: state.books,
  user: state.user
});

export default connect(mapStateToProps, { editBook })(BookCreated);
