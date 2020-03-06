import React from 'react';

const BookProgression = ({ selectedbook }) => {
  const getProgressArr = trackingArr => {
    const outputArr = [];
    for (let i = 0; i < trackingArr.length; i++) {
      outputArr.push(trackingArr[i].numPages);
    }
    return outputArr;
  };

  const trackingArr = selectedbook.tracking
    ? getProgressArr(selectedbook.tracking)
    : null;
  const pagesRead = selectedbook.tracking
    ? trackingArr.reduce((total, num) => total + num)
    : null;

  return (
    <div>
      <h3>{`Pages Read: ${pagesRead}`}</h3>
      <h3>{`Pages in Book: ${selectedbook.numPages}`}</h3>
    </div>
  );
};

export default BookProgression;
