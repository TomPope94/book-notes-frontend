import React from 'react';
import { connect } from 'react-redux';

import TrackingBooks from 'components/tracking/TrackingBooks';

const styles = {
  pageTitle: {
    fontSize: '3rem',
    fontWeight: 200,
    color: '#216e82',
    marginRight: 50
  },
  orangeSpan: {
    color: '#ff8c56'
  }
};

const Tracking = ({ books }) => {
  return (
    <div>
      <h1 style={styles.pageTitle}>
        My Reading<span style={styles.orangeSpan}>.</span>
      </h1>
      <TrackingBooks books={books} />
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(Tracking);
