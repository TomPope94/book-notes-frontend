import React, { useState } from 'react';
import anime from 'animejs';

const styles = {
  icon: {
    height: '100%',
    marginBottom: 20,
    cursor: 'pointer'
  }
};

const HelpIcon = ({ ...props }) => {
  const [hover, setHover] = useState(false);

  const animate = direction => {
    const animateDirection = direction ? 'normal' : 'reverse';

    anime({
      targets: '.helpIcon, .helpIcon .helpMark',
      duration: 100,
      easing: 'linear',
      direction: animateDirection,
      fill: ['#fff', '#f38b66'],
      stroke: ['#fff', '#f38b66']
    });
  };

  const handleHover = () => {
    animate(!hover);
    setHover(!hover);
  };

  return (
    <svg
      style={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 117"
      className="helpIcon"
      onMouseOver={() => handleHover()}
      onMouseOut={() => handleHover()}
      {...props}
    >
      <path
        style={{ pointerEvents: 'none' }}
        d="M58.5 1A57.5 57.5 0 111 58.5 57.56 57.56 0 0158.5 1m0-1A58.5 58.5 0 10117 58.5 58.5 58.5 0 0058.5 0z"
      ></path>
      <path
        className="helpMark"
        fill={props.textfill}
        stroke={props.textstroke}
        strokeMiterlimit="10"
        style={{ pointerEvents: 'none' }}
        d="M58 76.5h-3.1a63 63 0 01.73-10.88 24.75 24.75 0 011.87-6.29 66.68 66.68 0 015.83-8.45 33.32 33.32 0 005.18-9A27.85 27.85 0 0070 32.5q0-6.9-3.89-11.11a12.41 12.41 0 00-9.49-4.21 13.27 13.27 0 00-8.09 2.39c-2.17 1.6-3.25 3.23-3.25 4.91 0 .93.76 2 2.29 3.15Q51 30.32 51 33.47a6.47 6.47 0 01-1.82 4.68A6.18 6.18 0 0144.59 40 7 7 0 0139 37.38a10.24 10.24 0 01-2.27-6.91q0-6.73 6.21-12.09T58.62 13q9.66 0 15.95 6a19.34 19.34 0 016.3 14.58 22.4 22.4 0 01-2.17 10q-1.64 3.34-8.26 9.37-8.6 7.68-10.44 11.37T58 76.5zm-1.4 12.65a7 7 0 017 7 7.18 7.18 0 01-2.05 5.18 6.89 6.89 0 01-9.95 0 7.17 7.17 0 01-2.05-5.21 6.68 6.68 0 012.05-5 6.8 6.8 0 014.97-1.97z"
      ></path>
    </svg>
  );
};

export default HelpIcon;
