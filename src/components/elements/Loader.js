import React from "react";

const Loader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="201"
      height="201"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      style={{ margin: "auto" }}
    >
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeWidth="2"
        d="M20 25h60v50H20z"
      ></path>
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M50 25l28.529-.245v50.49L50 75"
      >
        <animate
          attributeName="d"
          begin="0s"
          dur="1.333333333333333s"
          keyTimes="0;0.5;0.501;1"
          repeatCount="indefinite"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        ></animate>
        <animate
          attributeName="opacity"
          begin="0s"
          dur="1.333333333333333s"
          keyTimes="0;0.5;0.5001;1"
          repeatCount="indefinite"
          values="1;1;0;0"
        ></animate>
      </path>
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M50 25l18.569-1.905v53.81L50 75"
      >
        <animate
          attributeName="d"
          begin="-0.2213333333333333s"
          dur="1.333333333333333s"
          keyTimes="0;0.5;0.501;1"
          repeatCount="indefinite"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.2213333333333333s"
          dur="1.333333333333333s"
          keyTimes="0;0.5;0.5001;1"
          repeatCount="indefinite"
          values="1;1;0;0"
        ></animate>
      </path>
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M50 25l8.729-3.545v57.09L50 75"
      >
        <animate
          attributeName="d"
          begin="-0.43999999999999995s"
          dur="1.333333333333333s"
          keyTimes="0;0.5;0.501;1"
          repeatCount="indefinite"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.43999999999999995s"
          dur="1.333333333333333s"
          keyTimes="0;0.5;0.5001;1"
          repeatCount="indefinite"
          values="1;1;0;0"
        ></animate>
      </path>
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M50 25H20v50h30"
      >
        <animate
          attributeName="d"
          begin="-0.43999999999999995s"
          dur="1.333333333333333s"
          keyTimes="0;0.499;0.5;1"
          repeatCount="indefinite"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.43999999999999995s"
          dur="1.333333333333333s"
          keyTimes="0;0.4999;0.5;1"
          repeatCount="indefinite"
          values="0;0;1;1"
        ></animate>
      </path>
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M50 25H20v50h30"
      >
        <animate
          attributeName="d"
          begin="-0.2213333333333333s"
          dur="1.333333333333333s"
          keyTimes="0;0.499;0.5;1"
          repeatCount="indefinite"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.2213333333333333s"
          dur="1.333333333333333s"
          keyTimes="0;0.4999;0.5;1"
          repeatCount="indefinite"
          values="0;0;1;1"
        ></animate>
      </path>
      <path
        fill="#f38b66"
        stroke="#222641"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M50 25H20v50h30"
      >
        <animate
          attributeName="d"
          begin="0s"
          dur="1.333333333333333s"
          keyTimes="0;0.499;0.5;1"
          repeatCount="indefinite"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        ></animate>
        <animate
          attributeName="opacity"
          begin="0s"
          dur="1.333333333333333s"
          keyTimes="0;0.4999;0.5;1"
          repeatCount="indefinite"
          values="0;0;1;1"
        ></animate>
      </path>
    </svg>
  );
};

export default Loader;
