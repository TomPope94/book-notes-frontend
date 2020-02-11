import React from 'react';

const styles = {
  priceTag: {
    fontWeight: 200,
    color: '#216e82',
    margin: 0
  }
};

const StoreBook = ({ number, hovernumber, basket, ...props }) => {
  let price;
  if (number === 1) {
    price = '+99p';
  } else if (number === 2) {
    price = '+89p';
  } else if (number === 3) {
    price = '+79p';
  } else if (number === 4) {
    price = '+69p';
  } else if (number === 5) {
    price = '+59p';
  } else {
    price = 'NA';
  }

  return (
    <div {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437 506">
        <path
          id="bookCover"
          fill="none"
          stroke="#5499a9"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M79.06 48.76H429.47V499.28H79.06z"
        ></path>
        <path
          id="bookInner"
          fill={
            basket >= number
              ? '#ff8c56'
              : hovernumber >= number
              ? '#ffdcd0'
              : 'none'
          }
          stroke="#5499a9"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M2.73 23.24C2.5 48.5 22.27 48.5 77.61 47.5l345.39.06s-29.59-20 0-45.06H22.76S2.92 2.49 2.73 23.24z"
        ></path>
        <path
          id="bookBind"
          fill={basket >= number ? '#5399a9' : 'none'}
          stroke="#5499a9"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M2.74 26.23l1.7 441.87c-.6 31.18 23.18 31.18 51.61 31.18h22.88V48.76C37.5 48.5 2.5 53.5 2.74 26.23z"
        ></path>
        <text
          fill={
            basket >= number
              ? '#ff8c57'
              : hovernumber >= number
              ? '#b8e0e8'
              : 'none'
          }
          stroke={basket >= number || hovernumber >= number ? 'none' : '#000'}
          fontFamily="BaskOldFace, Baskerville Old Face"
          fontSize="275.23"
          transform="translate(186.59 345.44)"
        >
          {number}
        </text>
      </svg>
      <h3 style={styles.priceTag}>{price}</h3>
    </div>
  );
};

export default StoreBook;
