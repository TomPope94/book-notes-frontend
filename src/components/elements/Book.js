import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BOOKS_ADD, BOOKS_DETAILS } from 'constants/routes';
import { getBook } from 'actions/books/books';

import BookRoundel from 'components/elements/BookRoundel';

const Book = ({
  id,
  bookTitle,
  image,
  addBook,
  getBook,
  styling,
  hoverEffect = true,
  roundelvalue
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
      position: 'relative',
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

  const bookType = addBook ? (
    <Link to={BOOKS_ADD.route}>
      <div style={{ ...styles.book, ...styles.addBook }} />
    </Link>
  ) : (
    // <Link to={BOOKS_DETAILS}>
    <div
      style={{ ...styles.book, ...styles.existingBook }}
      onMouseDown={() => history.push(`${BOOKS_DETAILS.route}/${id}`)}
      className="book"
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      <BookRoundel value={roundelvalue ? roundelvalue : 'none'} />
    </div>
    // </Link>
  );

  return <Fragment>{bookType}</Fragment>;
};

export default connect(null, { getBook })(Book);
