import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs';

import { editBook } from 'actions/books/books';

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
    height: '90%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  title: {
    height: '10%',
    fontWeight: 200,
    color: 'rgba(34, 38, 65, 0.75)'
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  cardText: {
    fontSize: '1.5rem',
    color: 'rgba(34, 38, 65, 0.75)',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pointerEvents: 'none'
  },
  textEmphasis: {
    color: '#f38b66'
  },
  textUnderline: {
    marginTop: '0.5rem',
    background: '#f38b66',
    height: 3,
    width: '100%',
    transform: 'scaleX(0.25)'
  }
};

const BookCreated = ({ selectedBook, editBook }) => {
  const handleClick = async newState => {
    if (selectedBook) {
      await editBook(selectedBook.bookId, {
        ...selectedBook,
        bookState: newState
      });
    }
  };

  const underlineAnimation = (id, mouseHover) => {
    const animateDirection = mouseHover ? 'normal' : 'reverse';

    anime({
      targets: `#${id}`,
      direction: animateDirection,
      duration: 250,
      scaleX: [0.25, 1],
      easing: 'linear'
    });
  };
  return (
    <div style={styles.contentsContainer}>
      <h1 style={styles.title}>This book has not been started...</h1>
      <div style={styles.choiceContainer}>
        <div
          style={styles.cardContainer}
          onMouseOver={() => underlineAnimation('planUnderline', true)}
          onMouseOut={() => underlineAnimation('planUnderline', false)}
          onClick={() => handleClick('Planned')}
        >
          <div style={styles.cardText}>
            <div>
              <span style={styles.textEmphasis}>Plan</span> a start date.
            </div>
            <span style={styles.textUnderline} id="planUnderline" />
            <h2>Calendar image goes here</h2>
          </div>
        </div>
        <div
          style={styles.cardContainer}
          onMouseOver={() => underlineAnimation('startNowUnderline', true)}
          onMouseOut={() => underlineAnimation('startNowUnderline', false)}
          onClick={() => handleClick('Reading')}
        >
          <div style={styles.cardText}>
            <div>
              <span style={styles.textEmphasis}>Start</span> reading now.
            </div>
            <span style={styles.textUnderline} id="startNowUnderline"></span>
            <h2>Start reading image goes here</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { editBook })(BookCreated);
