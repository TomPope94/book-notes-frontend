import React from 'react';

const BookProgression = ({ selectedbook }) => {
  const { pagesRead, numPages } = selectedbook;

  const pagesReadProp = (pagesRead / numPages) * 100;
  const pagesLeftProp = 100 - pagesReadProp;

  const styles = {
    vizContainer: {
      height: '100%',
      width: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative'
    },
    barsContainer: {
      height: '100%',
      width: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    pagesRead: {
      background: '#216e82',
      border: '2px solid #216e82',
      height: `${pagesReadProp}%`,
      width: '100%'
    },
    pagesLeft: {
      borderLeft: '2px solid #216e82',
      borderRight: '2px solid #216e82',
      height: `${pagesLeftProp}%`,
      width: '100%'
    },
    arrowLeft: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '10px solid #ff8c56',
      transition: '0.5s',
      position: 'absolute',
      left: 0,
      top: `${pagesLeftProp - 4}%`
    },
    arrowRight: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderRight: '10px solid #ff8c56',
      transition: '0.5s',
      position: 'absolute',
      right: 0,
      top: `${pagesLeftProp - 4}%`
    }
  };

  return (
    <div style={styles.vizContainer}>
      <div style={styles.arrowLeft} />
      <div style={styles.barsContainer}>
        <div style={styles.pagesLeft} />
        <div style={styles.pagesRead} />
      </div>
      <div style={styles.arrowRight} />
    </div>
  );
};

export default BookProgression;
