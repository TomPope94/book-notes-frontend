import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DrawLine from 'components/books/details/tracker/DrawLine';

const Viz = props => {
  useEffect(() => {
    if (props.selectedBook.tracking) {
      DrawLine(props);
    }
  }, [props]);
  return <div style={{ position: 'relative' }} className="viz" />;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps)(Viz);
