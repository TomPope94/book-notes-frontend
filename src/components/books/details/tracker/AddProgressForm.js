import React, { Fragment, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs';

import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import { addTracking } from 'actions/books/tracker';

const styles = {
  navContainer: {
    background: 'transparent',
    position: 'relative',
    cursor: 'pointer',
    marginTop: 20
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    transform: 'translateY(20px)'
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    background: '#fff',
    boxShadow: '0px 2px 5px grey'
    // pointerEvents: 'all'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
};

const AddProgressForm = ({ addTracking, selectedBook }) => {
  const trackerContext = useContext(TrackerContext);
  const { state, changeState } = trackerContext;
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    animateBox(true);
  }, []);

  const handleChange = e => {
    changeState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    await addTracking(selectedBook.bookId, state, 22);
    changeState({ ...state, showForm: false });
  };
  const handleClose = async () => {
    animateBox(false);
    await delay(350);
    changeState({ ...state, showForm: false });
  };

  const animateBox = open => {
    const animationDirection = open ? 'normal' : 'reverse';

    anime({
      targets: '#progressForm',
      direction: animationDirection,
      autoplay: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      translateY: [20, 0],
      duration: 335
    });
  };

  return (
    <Fragment>
      <div
        style={styles.navContainer}
        // onClick={() => changeState({ ...state, showForm: false })}
      >
        <div
          style={{
            ...styles.formContainer,
            background: 'transparent',
            marginTop: 50
          }}
          id="progressForm"
        >
          <form style={styles.formStyle} onSubmit={e => handleSubmit(e)}>
            <div style={styles.inputContainer}>
              <input
                type="date"
                name="date"
                value={state.date}
                onChange={e => handleChange(e)}
              />
              <input
                type="number"
                name="numPages"
                value={state.numPages}
                onChange={e => handleChange(e)}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <button onMouseDown={() => handleClose()}>Close</button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { addTracking })(AddProgressForm);
