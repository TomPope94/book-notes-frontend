import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BOOKS_ADD, BOOKS_DETAILS } from 'constants/routes';
import { getBook } from 'actions/books/books';
import anime from 'animejs';

const Book = ({
  id,
  bookTitle,
  image,
  addBook,
  getBook,
  styling,
  hoverEffect = true
}) => {
  const [hoverState, setHoverState] = useState(false);

  const bgStyling =
    image === ' '
      ? { background: '#f38b66' }
      : {
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        };

  const styles = {
    book: {
      boxShadow: '0 2px 3px rgba(34,38,65,0.5)',
      cursor: 'pointer',
      height: 225,
      maxWidth: 150,
      minWidth: 150,
      margin: 25,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      textAlign: 'center',
      transform: hoverState && hoverEffect ? 'scale(1.1)' : 'scale(1)',
      transition: '0.3s',
      ...styling
    },
    addBook: {
      border: '1px solid #f38b66',
      background: '#fff'
    },
    existingBook: {
      ...bgStyling
    }
  };

  const history = useHistory();

  const enlargeBook = (hover, e) => {
    const animateDirection = hover ? 'normal' : 'reverse';

    anime({
      targets: e.target,
      scale: [1, 1.1],
      boxShadow: [
        '0 2px 3px rgba(34,38,65,0.5)',
        '0 3px 5px rgba(34,38,65,0.5)'
      ],
      duration: 250,
      easing: 'cubicBezier(0.675, 0.000, 0.330, 1.000)',
      direction: animateDirection
    });
  };

  const openBook = () => {
    // getBook(id);

    history.push(`${BOOKS_DETAILS.route}/${id}`);
  };

  const bookType = addBook ? (
    <Link to={BOOKS_ADD.route}>
      <div style={{ ...styles.book, ...styles.addBook }} />
    </Link>
  ) : (
    // <Link to={BOOKS_DETAILS}>
    <div
      style={{ ...styles.book, ...styles.existingBook }}
      onMouseDown={() => openBook()}
      className="book"
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      {image ? null : bookTitle}
    </div>
    // </Link>
  );

  return <Fragment>{bookType}</Fragment>;
};

export default connect(null, { getBook })(Book);
