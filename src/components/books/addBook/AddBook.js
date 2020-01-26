import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import anime from 'animejs';

import {
  BOOKS_HOME,
  BOOKS_ADD,
  BOOKS_MANUAL,
  BOOKS_SEARCH
} from 'constants/routes';

import Breadcrumb from 'components/nav/Breadcrumb';
import SearchIMG from 'components/elements/images/add_book_assets_search_books.png';
import ManualIMG from 'components/elements/images/add_book_assets_manual_entry.png';
import WaveBlue from 'components/elements/dividers/WaveBlue';

const styles = {
  contentContainer: {
    height: '95%',
    color: '#0e3f4a',
    pointerEvents: 'all',
    display: 'flex',
    flexDirection: 'column'
  },
  addBookChoices: {
    display: 'flex',
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'space-between',
    marginTop: 40
  },
  contentHalf: {
    cursor: 'pointer',
    borderRadius: 15,
    position: 'relative',
    transform: 'scale(1,1)',
    transform: 'translateY(0)',
    margin: 25
  },
  title: {
    fontSize: '3rem',
    fontWeight: 200
  },
  searchImage: {
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    borderRadius: 15,
    boxShadow: '0 2px 5px #8a8fad',
    opacity: 0.75,
    maxWidth: 500
  },
  contentBackground: {
    width: '100%',
    position: 'absolute',
    bottom: 5,
    left: 0,
    pointerEvents: 'none',
    background: 'rgba(1,1,1,0.1)',
    borderRadius: '0 0 15px 15px'
  },
  buttonContent: {
    padding: 25,
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 200
  },
  buttonHeader: {
    fontSize: '2rem',
    fontWeight: 200
  },
  underline: {
    width: '100%',
    height: 2,
    background: 'linear-gradient(to right, #222641, transparent)'
  }
};

const AddBook = () => {
  const [searchHover, setSearchHover] = useState(false);
  const [manualHover, setManualHover] = useState(false);
  const history = useHistory();

  const animateHover = (direction, target) => {
    const animateDirection = direction ? 'normal' : 'reverse';

    anime({
      targets: `.${target}`,
      duration: 200,
      easing: 'linear',
      scaleY: [1, 1.05],
      scaleX: [1, 1.05],
      direction: animateDirection
    });
  };

  const handleSearchHover = () => {
    animateHover(!searchHover, 'searchButton');
    setSearchHover(!searchHover);
  };

  const handleManualHover = () => {
    animateHover(!manualHover, 'manualButton');
    setManualHover(!manualHover);
  };

  return (
    <Fragment>
      <div style={styles.contentContainer}>
        <Breadcrumb routes={{ BOOKS_HOME, BOOKS_ADD }} />
        <h1 style={styles.title}>Add Book.</h1>
        <span style={styles.underline} />
        <div style={styles.addBookChoices}>
          <div
            style={styles.contentHalf}
            onClick={() => history.push(BOOKS_SEARCH.route)}
            className="searchButton"
            onMouseOver={() => handleSearchHover()}
            onMouseOut={() => handleSearchHover()}
          >
            <img style={styles.searchImage} src={SearchIMG} />
            <div style={styles.contentBackground}>
              <div style={styles.buttonContent}>
                {!searchHover ? (
                  <h1 style={styles.buttonHeader}>Search</h1>
                ) : (
                  <p>
                    Find the exact book you're looking for by author, title or
                    ISBN
                  </p>
                )}
              </div>
            </div>
          </div>
          <div
            style={styles.contentHalf}
            onClick={() => history.push(BOOKS_MANUAL.route)}
            className="manualButton"
            onMouseOver={() => handleManualHover()}
            onMouseOut={() => handleManualHover()}
          >
            <img style={styles.searchImage} src={ManualIMG} />
            <div style={styles.contentBackground}>
              <div style={styles.buttonContent}>
                {!manualHover ? (
                  <h1 style={styles.buttonHeader}>Manual Entry</h1>
                ) : (
                  <p>For when you can enter the details yourself...</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <WaveBlue
          style={{
            width: '100vw',
            position: 'absolute',
            left: 0,
            bottom: 0,
            opacity: 0.9,
            transform: 'scaleY(0.5)',
            transformOrigin: 'bottom'
          }}
        /> */}
      </div>
    </Fragment>
  );
};

export default AddBook;
