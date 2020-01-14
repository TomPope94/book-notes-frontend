import React from "react";

const styles = {
  svg: {
    width: "75%",
    height: "75%",
    pointerEvents: "none"
  },
  scaleElements: {
    transform: "scale(0)",
    transformOrigin: "top"
  },
  calendar: {
    opacity: 0
  }
};

const StartReading = () => {
  return (
    <svg
      style={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="1658"
      height="894.94"
      viewBox="0 0 1658 894.94"
    >
      <path fill="#ffebe1" d="M99.86 722.05H877.84V862.15H99.86z"></path>
      <path
        fill="#ffac86"
        d="M37.26 792.11c0 38.24 33.24 69.3 74.52 70h803.38c8.19 0 14.84 6.12 14.84 13.63v5.54c0 7.51-6.65 13.62-14.84 13.62H110.23C53.18 894.14 0 849.22 0 792.11s53.18-102 110.23-102.81h804.93c8.19 0 14.84 6.11 14.84 13.62v5.55c0 7.51-6.65 13.62-14.84 13.62H111.78c-41.28.68-74.52 31.77-74.52 70.02z"
      ></path>
      <ellipse
        cx="1525.95"
        cy="700.4"
        fill="none"
        stroke="#004757"
        strokeMiterlimit="10"
        strokeWidth="20"
        rx="133.42"
        ry="70.98"
        transform="rotate(-28.53 1527.7 700.816)"
      ></ellipse>
      <path
        fill="#ffc7ad"
        d="M1116.73 583.77h414.48v159.6a151.57 151.57 0 01-151.57 151.57H1268.3a151.57 151.57 0 01-151.57-151.57v-159.6z"
      ></path>
      <rect
        width="486.31"
        height="41.82"
        x="1080.5"
        y="853.12"
        fill="#ffac86"
        rx="17"
      ></rect>
      <path
        fill="none"
        stroke="#1e788c"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M1160.29 210.77c-10.1 36.08-17.94 80.64-1.48 103.59 9.32 13 20.16 10.31 28.22 21.87 10.31 14.79 13.13 48.68-19.81 132.54M1312.29.27c-10.1 56.08-17.94 125.34-1.48 161 9.32 20.2 20.16 16 28.22 34 10.31 23 13.13 75.65-19.81 206M1441.29 260.77c-10.1 40.21-17.94 89.86-1.48 115.43 9.32 14.48 20.16 11.5 28.22 24.38 10.31 16.47 13.13 54.24-19.81 147.69"
      ></path>
    </svg>
  );
};

export default StartReading;
