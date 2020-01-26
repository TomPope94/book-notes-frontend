import React from 'react';

const styles = {
  svg: {
    width: '75%',
    height: '75%',
    pointerEvents: 'none'
  },
  scaleElements: {
    transform: 'scale(0)',
    transformOrigin: 'top'
  },
  calendar: {
    opacity: 0
  }
};

const StartReading = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <g style={{ pointerEvents: 'none' }}>
        <path fill="#75b3b3" d="M-1.13 0H501.37V500H-1.13z"></path>
        <path
          fill="#fff"
          stroke="#013a40"
          strokeMiterlimit="10"
          strokeWidth="10"
          d="M45 175H456V445H45z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          stroke="#013a40"
          strokeMiterlimit="10"
          strokeWidth="5"
          d="M440 158.5c-104-18-189.5 2.5-189.5 2.5v278s90.5-16 190 .5zM60 158.5c104-18 189.5 2.5 189.5 2.5v278s-90.5-16-190 .5z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          stroke="#013a40"
          strokeMiterlimit="10"
          strokeWidth="5"
          d="M431.5 147.5c-98-51-181 13.5-181 13.5v278s86.5-43.5 181-10.5zM66.5 147.5c98-51 181 13.5 181 13.5v278s-86.5-43.5-181-10.5z"
        ></path>
        <text
          fill="#f26a4b"
          fontFamily="BaskOldFace, Baskerville Old Face"
          fontSize="43"
          transform="translate(97.2 87.8)"
        >
          Start{' '}
          <tspan x="88.58" y="0" fill="#fff">
            reading now
          </tspan>
          <tspan x="296.07" y="0">
            .
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default StartReading;
