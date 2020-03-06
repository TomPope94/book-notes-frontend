import React, { useState, Fragment } from 'react';

const ReadingProgressViz = ({
  totalPages,
  pagesRead,
  title = true,
  ...props
}) => {
  const propRead = (pagesRead / totalPages) * 100;
  const [pagesLeftHover, setPagesLeftHover] = useState(false);
  const [pagesReadHover, setPagesReadHover] = useState(false);

  const styles = {
    totalContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 200,
      color: '#216e82',
      margin: 0
    },
    vizParentContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    vizContainer: {
      width: '75%',
      height: 10,
      display: 'flex',
      borderRadius: 10
    },
    pagesReadContainer: {
      width: `${propRead}%`,
      cursor: 'pointer',
      background: pagesReadHover ? 'transparent' : '#216e82',
      border: '2px solid #216e82',
      transition: '0.5s'
    },
    pagesLeftContainer: {
      width: `${100 - propRead}%`,
      cursor: 'pointer',
      background: pagesLeftHover ? 'transparent' : '#ff8c56',
      border: '2px solid #ff8c56',
      transition: '0.5s'
    },
    infoBox: {
      height: 50,
      minWidth: 100,
      padding: 5,
      width: '7.5%',
      transition: '0.5s',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    infoBoxLeft: {
      opacity: pagesReadHover ? 1 : 0,
      background: '#fff',
      border: '2px solid #216e82'
    },
    infoBoxRight: {
      opacity: pagesLeftHover ? 1 : 0,
      background: '#fff',
      border: '2px solid #ff8c56'
    },
    arrowLeft: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '10px solid #216e82',
      opacity: pagesReadHover ? 1 : 0,
      transition: '0.5s'
    },
    arrowRight: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderRight: '10px solid #ff8c56',
      opacity: pagesLeftHover ? 1 : 0,
      transition: '0.5s'
    }
  };

  return (
    <div style={styles.totalContainer}>
      {title ? <h2 style={styles.title}>Current reading progress</h2> : null}
      <div style={styles.vizParentContainer}>
        <div style={{ ...styles.infoBox, ...styles.infoBoxLeft }}>
          <p>{`Completed: ${pagesRead}`}</p>
        </div>
        <span style={styles.arrowLeft} />
        <div style={styles.vizContainer} {...props}>
          <div
            style={styles.pagesReadContainer}
            id="pagesRead"
            onMouseOver={() => setPagesReadHover(true)}
            onMouseOut={() => setPagesReadHover(false)}
          />
          <div
            style={styles.pagesLeftContainer}
            id="pagesLeft"
            onMouseOver={() => setPagesLeftHover(true)}
            onMouseOut={() => setPagesLeftHover(false)}
          />
        </div>
        <span style={styles.arrowRight} />
        <div style={{ ...styles.infoBox, ...styles.infoBoxRight }}>
          <p>{`To Go: ${totalPages - pagesRead}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadingProgressViz;
