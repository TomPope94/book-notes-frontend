import React from "react";

const LogoOrange = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 630 261"
      {...props}
    >
      <defs>
        <radialGradient
          id="a"
          cx="1599.06"
          cy="513.34"
          r="134.46"
          gradientTransform="matrix(.52 0 0 .8 -341.79 -298.72)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.28" stopColor="#b5b5b5"></stop>
          <stop offset="1"></stop>
        </radialGradient>
        <radialGradient
          id="c"
          cx="1159.06"
          cy="-111.34"
          r="134.46"
          gradientTransform="matrix(.52 0 0 .8 -308.41 216.69)"
          xlinkHref="#a"
        ></radialGradient>
        <radialGradient
          id="d"
          cx="1389.58"
          cy="357.93"
          r="134.46"
          gradientTransform="matrix(.52 0 0 .8 -347.38 -213.83)"
          xlinkHref="#a"
        ></radialGradient>
        <filter
          id="b"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"></feColorMatrix>
        </filter>
        <mask
          id="e"
          width="202.92"
          height="147.8"
          x="383.95"
          y="39.06"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <path
              fill="url(#a)"
              stroke="#ccc"
              strokeMiterlimit="10"
              d="M393.93 56.86H576.88V169.05H393.93z"
              transform="rotate(-11.58 485.223 112.917)"
            ></path>
          </g>
        </mask>
        <mask
          id="f"
          width="212.76"
          height="173.16"
          x="184.79"
          y="40.82"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <path
              fill="url(#c)"
              stroke="#ccc"
              strokeMiterlimit="10"
              d="M199.7 71.31H382.65V183.5H199.7z"
              transform="rotate(21.69 291.165 127.399)"
            ></path>
          </g>
        </mask>
        <mask
          id="g"
          width="194.72"
          height="131.71"
          x="274.09"
          y="7.36"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <path
              fill="url(#d)"
              stroke="#ccc"
              strokeMiterlimit="10"
              d="M279.97 17.12H462.92V129.31H279.97z"
              transform="matrix(.99 -.1 .1 .99 -5.6 39.02)"
            ></path>
          </g>
        </mask>
      </defs>
      <g style={{ isolation: "isolate" }}>
        {/* <path fill="#f38b66" d="M0.5 -0.5H630.5V260.5H0.5z"></path> */}
        <text
          fill="#fff"
          fontFamily="BaskOldFace, Baskerville Old Face"
          fontSize="170.07"
          transform="translate(16.14 234.31)"
        >
          Libe
          <tspan x="308.67" y="0" fill="#004757">
            read
          </tspan>
        </text>
        <g style={{ mixBlendMode: "lighten" }}>
          <g
            fill="none"
            stroke="#ccc"
            strokeMiterlimit="10"
            mask="url(#e)"
            style={{ mixBlendMode: "lighten", isolation: "isolate" }}
          >
            <path d="M402.06 93.59c64.83-13.28 84.56 23.67 84.56 23.67S483.06 77 555.19 62.88"></path>
            <path d="M403.87 80.2c61.13-12.52 82.81 37.38 82.81 37.38s-6.44-53 61.62-66.1"></path>
          </g>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M403.42 111.37c53.18-16 76.74 1.5 81.75 6.08a1 1 0 001.62-.32C489.71 111 505 85.5 560.92 79.76"
          ></path>
        </g>
        <g style={{ mixBlendMode: "lighten" }}>
          <g
            fill="none"
            stroke="#ccc"
            strokeMiterlimit="10"
            mask="url(#f)"
            style={{ mixBlendMode: "lighten", isolation: "isolate" }}
          >
            <path d="M232.1 65.49c61.5 24.46 57.72 66.18 57.72 66.18s19.11-35.62 87.18-7.87"></path>
            <path d="M241 55.3c57.94 23.06 48.7 76.7 48.7 76.7s23.7-47.86 87.78-21.47"></path>
          </g>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M223.49 81.11c53.26 15.77 63.34 43.35 65 49.92a1 1 0 001.53.63c5.83-3.56 32.6-16.45 82.48 9.41"
          ></path>
        </g>
        <g
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          mask="url(#g)"
          style={{ mixBlendMode: "lighten", isolation: "isolate" }}
        >
          <path d="M290.39 45.8c65.82-6.88 81.84 31.82 81.84 31.82s.39-40.42 73.56-47.43"></path>
          <path d="M293.5 32.65c62.06-6.48 78.76 45.29 78.76 45.29S371 24.55 440 18.18"></path>
        </g>
        <path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M290 63.62c54.49-10.75 76.23 9 80.76 14.05a1 1 0 001.65-.16c3.51-5.86 21.23-29.7 77.43-30"
        ></path>
      </g>
    </svg>
  );
};

export default LogoOrange;
