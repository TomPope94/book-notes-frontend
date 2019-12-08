import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import DrawLine from 'components/books/details/tracker/DrawLine';
import { TrackerContext } from 'components/books/details/tracker/tracker-context';

const Viz = props => {
  const trackerContext = useContext(TrackerContext);

  useEffect(() => {
    if (props.selectedBook.tracking) {
      DrawLine(props, trackerContext.changeState, trackerContext.state);
    }
  }, [props]);
  return <div style={{ position: 'relative' }} className="viz" />;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps)(Viz);
