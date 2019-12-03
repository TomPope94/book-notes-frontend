import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BOOKS_ADD, BOOKS_DETAILS } from 'constants/routes';
import { getBook } from 'actions/books';
import anime from 'animejs';

const Book = ({ id, bookTitle, addBook, getBook }) => {
  const styles = {
    book: {
      boxShadow: '0 2px 4px #222641',
      cursor: 'pointer',
      height: 300,
      width: 200,
      margin: 50,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      textAlign: 'center'
    },
    addBook: {
      border: '1px solid #f38b66',
      background: '#fff'
    },
    existingBook: {
      background: '#f38b66'
    }
  };

  const history = useHistory();

  const enlargeBook = (hover, e) => {
    const animateDirection = hover ? 'normal' : 'reverse';

    anime({
      targets: e.target,
      scale: [1, 1.1],
      duration: 250,
      easing: 'cubicBezier(0.675, 0.000, 0.330, 1.000)',
      direction: animateDirection
    });
  };

  const openBook = () => {
    getBook(id);

    history.push(BOOKS_DETAILS);
  };

  const bookType = addBook ? (
    <Link to={BOOKS_ADD}>
      <div style={{ ...styles.book, ...styles.addBook }} />
    </Link>
  ) : (
    // <Link to={BOOKS_DETAILS}>
    <div
      style={{ ...styles.book, ...styles.existingBook }}
      onClick={() => openBook()}
      className="book"
      onMouseOver={e => enlargeBook(true, e)}
      onMouseOut={e => enlargeBook(false, e)}
    >
      {bookTitle}
    </div>
    // </Link>
  );

  return <Fragment>{bookType}</Fragment>;
};

export default connect(null, { getBook })(Book);
