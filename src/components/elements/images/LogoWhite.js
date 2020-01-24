import React from "react";

const LogoWhite = ({ ...props }) => {
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
          cx="991.04"
          cy="335.58"
          r="134.46"
          gradientTransform="matrix(.52 0 0 .8 -43.4 -165.24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.28" stopColor="#b5b5b5"></stop>
          <stop offset="1"></stop>
        </radialGradient>
        <radialGradient
          id="c"
          cx="606.02"
          cy="185.14"
          r="134.46"
          gradientTransform="matrix(.52 0 0 .8 -38.46 -30.14)"
          xlinkHref="#a"
        ></radialGradient>
        <radialGradient
          id="d"
          cx="760.66"
          cy="260.31"
          r="134.46"
          gradientTransform="matrix(.52 0 0 .8 -38.18 -144.61)"
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
          x="367.81"
          y="29.99"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <path
              fill="url(#a)"
              stroke="#ccc"
              strokeMiterlimit="10"
              d="M377.79 47.79H560.74V159.98H377.79z"
              transform="rotate(-11.58 469.104 103.86)"
            ></path>
          </g>
        </mask>
        <mask
          id="f"
          width="212.76"
          height="173.16"
          x="168.65"
          y="31.76"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <path
              fill="url(#c)"
              stroke="#ccc"
              strokeMiterlimit="10"
              d="M183.56 62.24H366.51V174.43H183.56z"
              transform="rotate(21.69 275.01 118.345)"
            ></path>
          </g>
        </mask>
        <mask
          id="g"
          width="194.72"
          height="131.71"
          x="257.95"
          y="-1.7"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#b)">
            <path
              fill="url(#d)"
              stroke="#ccc"
              strokeMiterlimit="10"
              d="M263.83 8.05H446.78V120.24H263.83z"
              transform="matrix(.99 -.1 .1 .99 -4.74 37.29)"
            ></path>
          </g>
        </mask>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          mask="url(#e)"
          style={{ mixBlendMode: "darken", isolation: "isolate" }}
        >
          <path d="M385.92 84.52c64.83-13.28 84.55 23.68 84.55 23.68S466.92 67.93 539 53.81"></path>
          <path d="M387.73 71.14c61.13-12.52 82.81 37.37 82.81 37.37s-6.44-53 61.62-66.09"></path>
        </g>
        <path
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M387.28 102.3c53.18-16 76.74 1.51 81.75 6.09a1 1 0 001.62-.32c2.92-6.17 18.23-31.64 74.13-37.38"
        ></path>
        <g
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          mask="url(#f)"
          style={{ mixBlendMode: "darken", isolation: "isolate" }}
        >
          <path d="M216 56.43c61.5 24.46 57.72 66.17 57.72 66.17s19.11-35.62 87.17-7.86"></path>
          <path d="M224.82 46.23c58 23.06 48.74 76.67 48.74 76.67s23.7-47.86 87.77-21.46"></path>
        </g>
        <path
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M207.35 72c53.25 15.77 63.34 43.35 65 49.93a1 1 0 001.53.62c5.82-3.56 32.59-16.45 82.48 9.41"
        ></path>
        <g
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          mask="url(#g)"
          style={{ mixBlendMode: "darken", isolation: "isolate" }}
        >
          <path d="M274.25 36.73c65.82-6.88 81.84 31.83 81.84 31.83s.39-40.42 73.55-47.43"></path>
          <path d="M277.36 23.59c62.06-6.49 78.76 45.28 78.76 45.28s-1.23-53.39 67.78-59.75"></path>
        </g>
        <path
          fill="none"
          stroke="#ccc"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M273.87 54.56c54.49-10.75 76.22 9 80.76 14a1 1 0 001.64-.16c3.51-5.85 21.24-29.7 77.43-29.95"
        ></path>
        <text
          fill="#f38b66"
          fontFamily="BaskOldFace, Baskerville Old Face"
          fontSize="170.07"
          transform="translate(0 225.24)"
        >
          Libe
          <tspan x="308.67" y="0" fill="#004757">
            read
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default LogoWhite;
