import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import PlanCalendar from 'components/books/details/planning/PlanCalendar';
// import { TrackerContext } from 'components/books/details/tracker/tracker-context';

const Viz = props => {
  //   const trackerContext = useContext(TrackerContext);

  useEffect(() => {
    if (props.selectedBook) {
      PlanCalendar(props);
    }
  }, [props]);
  return <div style={{ position: 'relative' }} className="calendarViz" />;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps)(Viz);
