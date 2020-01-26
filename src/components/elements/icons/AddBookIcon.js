import React, { useState } from 'react';
import anime from 'animejs';

const styles = {
  icon: {
    cursor: 'pointer'
  }
};

const AddBookIcon = ({ ...props }) => {
  const [hover, setHover] = useState(false);

  const animation = direction => {
    const animateDirection = direction ? 'normal' : 'reverse';

    anime({
      targets: '.plusSign',
      duration: 100,
      easing: 'linear',
      stroke: ['#000', '#f38b66'],
      direction: animateDirection
    });

    anime({
      targets: '.bookBinder',
      duration: 100,
      easing: 'linear',
      fill: ['none', '#f38b66'],
      direction: animateDirection
    });
  };

  const handleHover = () => {
    animation(!hover);
    setHover(!hover);
  };

  return (
    <svg
      style={styles.icon}
      className="plusSign"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 117"
      // strokeWidth={2}
      onMouseOver={() => handleHover()}
      onMouseOut={() => handleHover()}
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        d="M27.78 24.18l.32 82C28 112 32.4 112 37.68 112h4.24V28.36c-10.42.14-13.42 1.14-14.14-4.18z"
        className="bookBinder"
      ></path>
      <g style={{ pointerEvents: 'none' }}>
        <path d="M18.73 3v8.27H27v4.46h-8.27V24h-4.46v-8.27H6v-4.46h8.27V3h4.46m1-1h-6.46v8.27H5v6.46h8.27V25h6.46v-8.27H28v-6.46h-8.27V2z"></path>
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          d="M41.92 28.36H106.97V112H41.92z"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          d="M107 20H31.55A3.74 3.74 0 0028 22.39a4.25 4.25 0 00-.24 1.46 4.67 4.67 0 004.75 4.51H107s-5.6-3.71 0-8.36z"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          d="M32.17 22.32L104.65 22.32"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          d="M50.75 25.11L104.65 25.11"
        ></path>
      </g>
    </svg>
  );
};

export default AddBookIcon;
