import React, { useRef, useEffect, useState } from 'react';
import Viz from 'components/books/details/tracker/Viz';

const styles = {
  container: {
    height: '50%',
    width: '80%'
  }
};

const BookTrackerReport = () => {
  const [lineDimensions, setLineDimensions] = useState({
    width: 0,
    height: 100
  });
  const { width, height } = lineDimensions;
  const ref = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      resetRefDimension();
    };
    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    };
  });
  useEffect(() => {
    resetRefDimension();
  }, []);

  const resetRefDimension = () => {
    const width = ref.current ? ref.current.clientWidth : 0;
    // const height = ref.current ? ref.current.clientHeight : 0;

    setLineDimensions({
      ...lineDimensions,
      width: width
      // height: height
    });
  };

  return (
    <div style={styles.container} ref={ref}>
      <Viz width={width} height={height} />
    </div>
  );
};

export default BookTrackerReport;
