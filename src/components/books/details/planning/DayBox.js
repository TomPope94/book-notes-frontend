import React, { useState } from 'react';

const DayBox = ({ date }) => {
  const [hover, setHover] = useState(false);

  const styles = {
    box: {
      border: '1px solid grey',
      flexGrow: 1,
      width: '14.286%',
      cursor: 'pointer',
      background: hover ? 'grey' : 'white'
    }
  };
  return (
    <div
      style={styles.box}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <p>{date}</p>
    </div>
  );
};

export default DayBox;
