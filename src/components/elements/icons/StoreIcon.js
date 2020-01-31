import React, { useState } from 'react';
import anime from 'animejs';

const StoreIcon = ({ ...props }) => {
  const [hover, setHover] = useState(false);

  const animate = direction => {
    const animateDirection = direction ? 'normal' : 'reverse';

    anime
      .timeline({
        duration: 100,
        easing: 'linear',
        autoplay: true,
        direction: animateDirection
      })
      .add({
        targets: '.storeFilled',
        fill: ['#fff', '#f38b66']
      })
      .add(
        {
          targets: '.storeStroked',
          stroke: ['#fff', '#f38b66']
        },
        0
      );
  };

  const handleHover = () => {
    animate(!hover);
    setHover(!hover);
  };

  return (
    <svg
      onMouseOver={() => handleHover()}
      onMouseOut={() => handleHover()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 117"
      {...props}
    >
      <g style={{ pointerEvents: 'none' }}>
        <path
          className="storeFilled"
          fill="#fff"
          d="M59 5A54 54 0 115 59 54.06 54.06 0 0159 5m0-3a57 57 0 1057 57A57 57 0 0059 2z"
        ></path>
        <path
          className="storeFilled"
          fill="#fff"
          d="M89.14 69H45.53L38 42.93h58a1.29 1.29 0 011.23 1.65l-6.85 23.49a1.29 1.29 0 01-1.24.93z"
        ></path>
        <path
          className="storeStroked"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M21 31h6.33a9 9 0 018.72 6.25l10.85 36.1a7 7 0 006.83 4.84h35.16"
        ></path>
        <circle
          className="storeStroked"
          cx="54.59"
          cy="87.29"
          r="4.85"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <circle
          className="storeStroked"
          cx="82.04"
          cy="87.29"
          r="4.85"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
      </g>
    </svg>
  );
};

export default StoreIcon;
