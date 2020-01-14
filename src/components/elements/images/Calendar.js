import React, { useEffect } from "react";
import anime from "animejs";

const styles = {
  svg: {
    width: "100%",
    height: "100%",
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

const Calendar = () => {
  // const animation = () => {
  //   anime
  //     .timeline({
  //       autoplay: true,
  //       easing: "linear",
  //       duration: 600
  //     })
  //     .add({
  //       targets: "#cloudMid",
  //       scale: [0, 1],
  //       duration: 250
  //     })
  //     .add(
  //       {
  //         targets: "#cloudLeft",
  //         scale: [0, 1],
  //         duration: 500
  //       },
  //       0
  //     )
  //     .add(
  //       {
  //         targets: "#cloudRight",
  //         scale: [0, 1],
  //         duration: 450
  //       },
  //       0
  //     )
  //     .add(
  //       {
  //         targets: "#calendar",
  //         opacity: [0, 1],
  //         duration: 300
  //       },
  //       300
  //     )
  //     .add(
  //       {
  //         targets: "#birds",
  //         scale: [0, 1],
  //         duration: 400
  //       },
  //       200
  //     );
  // };

  // useEffect(() => {
  //   animation();
  // }, []);

  return (
    <svg
      style={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="1673.5"
      height="1327.5"
      viewBox="0 0 1673.5 1327.5"
    >
      {/* <g id="clouds">
        <path
          id="cloudRight"
          style={styles.scaleElements}
          fill="#ffac86"
          d="M1032.01 272.5c.16-15.92 14-28.78 31.11-28.78a32.74 32.74 0 0113.38 2.78c3.76-11.31 14.92-20 28.85-22.36a50.43 50.43 0 01-.33-5.79c0-29.88 25.93-54.11 57.91-54.11h1.18c4.85-22.07 24.08-39.24 48.14-42.59 1-30.36 29.45-54.7 64.35-54.7 35.55 0 64.38 25.26 64.38 56.41 0 1.53-.07 3.05-.2 4.55a43 43 0 0115.6 32.59 50 50 0 0116-2.6c26.2 0 47.44 19.84 47.44 44.32 0 1 0 1.94-.1 2.89h.36c15.26 0 28.18 8.45 32.56 20.1a33.08 33.08 0 0122.93-8.77c16.85 0 30.5 11.51 30.5 25.71a21.65 21.65 0 01-.88 6.14h.88c17.35 0 31.42 10.64 31.42 23.75l-53.51.14-451.68.29"
        ></path>
        <path
          id="cloudMid"
          style={styles.scaleElements}
          fill="#ffd7c4"
          d="M671.01 94.5c.08-7.32 6.75-13.24 15-13.24a16.46 16.46 0 016.44 1.3c1.81-5.2 7.17-9.22 13.88-10.28a21.34 21.34 0 01-.16-2.66c0-13.74 12.48-24.88 27.87-24.88h.57c2.33-10.15 11.59-18 23.17-19.59.49-14 14.17-25.15 31-25.15 17.12 0 31 11.62 31 25.94a20.6 20.6 0 01-.1 2.09 19.46 19.46 0 017.51 15 25 25 0 017.71-1.2c12.61 0 22.83 9.13 22.83 20.39 0 .44 0 .89-.05 1.32h.17c7.35 0 13.57 3.88 15.67 9.24a16.35 16.35 0 0111-4c8.11 0 14.68 5.29 14.68 11.82a9.61 9.61 0 01-.43 2.83h.43c8.35 0 15.12 4.89 15.12 10.92l-25.75.07-217.41.08"
        ></path>
        <path
          id="cloudLeft"
          style={styles.scaleElements}
          fill="#ffc7ad"
          d="M.01 188.5c.14-13.29 12.25-24 27.17-24a29.92 29.92 0 0111.68 2.35c3.28-9.44 13-16.73 25.2-18.66a38.55 38.55 0 01-.29-4.83c0-24.93 22.65-45.15 50.58-45.15h1c4.23-18.42 21-32.76 42-35.55.9-25.34 25.72-45.65 56.2-45.65 31.06 0 56.23 21.08 56.23 47.08 0 1.28-.06 2.54-.18 3.79 8.31 6.72 13.56 16.41 13.63 27.2a45.83 45.83 0 0114-2.17c22.89 0 41.44 16.56 41.44 37 0 .81 0 1.62-.09 2.41h.31c13.34 0 24.62 7.05 28.44 16.77a29.67 29.67 0 0120-7.31c14.71 0 26.64 9.61 26.64 21.45a17.55 17.55 0 01-.77 5.13h.77c15.16 0 27.44 8.88 27.44 19.82l-46.74.12-394.4.2"
        ></path>
      </g> */}
      <g id="calendar">
        <path fill="#ffebe1" d="M0 837H1064V1327H0z"></path>
        <path
          fill="#ffd7c4"
          d="M1064 1233c-18.53 16.15-28 18-36 14-13.2-6.59-27.68-47.15-33-92L0 1327V692h1064v541.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M138 1167L946 1170"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M138 1070.5L946 1073.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M138 974L946 977"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M856 877.5L855 1257.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M726.4 877.5L725.4 1257.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M596.8 877.5L595.8 1257.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M467.2 877.5L466.2 1257.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M337.6 877.5L336.6 1257.5"
        ></path>
        <path
          fill="none"
          stroke="#ffac86"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M208 877.5L207 1257.5"
        ></path>
        <path
          fill="#ffc7ad"
          d="M1033.31 1248.5s-19-14-26-37c-12.17-40-11-57-11-57l-850.81 148"
        ></path>
        <path fill="#ffac86" d="M0.5 691.5H1063.5V836.5H0.5z"></path>
        <circle cx="830.5" cy="771.5" r="11" fill="#ff5100"></circle>
        <circle cx="262.5" cy="771.5" r="11" fill="#ff5100"></circle>
        <path
          fill="#ffebe1"
          d="M1095.5 805.5L1095.5 1293.5 1064.5 1327.5 1064.5 835.5 1095.5 805.5z"
        ></path>
        <path
          fill="#ffc7ad"
          d="M1096.5 672.5L1095.5 806.5 1064 836.5 1064.5 691.5 1096.5 672.5z"
        ></path>
        <path
          fill="#ff8c57"
          d="M1096.5 672.5L1064.46 691.5 0 691.5 95.04 671.5 1096.5 672.5z"
        ></path>
        <path
          fill="none"
          stroke="#004757"
          strokeMiterlimit="10"
          strokeWidth="15"
          d="M833 772a99 99 0 1199-99M265 771a99 99 0 1199-99"
        ></path>
      </g>
      {/* <g id="birds" style={styles.scaleElements}>
        <path
          fill="none"
          stroke="#ffd7c4"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M1599.5 701.68s-31.67-37.7-76.74-27M1599.5 701.5s11-48 56-59"
        ></path>
        <path
          fill="#ffac86"
          d="M1673.5 661.02L1602.81 712.47 1602.67 712.35 1602.61 712.5 1510.19 690.43 1513.53 681.9 1599.75 702.49 1665.72 654.5 1673.5 661.02z"
        ></path>
        <path
          fill="none"
          stroke="#ffd7c4"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M1482.5 785.68s-31.67-37.7-76.74-27M1482.5 785.5s11-48 56-59"
        ></path>
        <path
          fill="#ffac86"
          d="M1556.5 745.02L1485.81 796.47 1485.67 796.35 1485.61 796.5 1393.19 774.43 1396.53 765.9 1482.75 786.49 1548.72 738.5 1556.5 745.02z"
        ></path>
        <path
          fill="none"
          stroke="#ffd7c4"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M1337.5 715.68s-31.67-37.7-76.74-27M1337.5 715.5s11-48 56-59"
        ></path>
        <path
          fill="#ffac86"
          d="M1411.5 675.02L1340.81 726.47 1340.67 726.35 1340.61 726.5 1248.19 704.43 1251.53 695.9 1337.75 716.49 1403.72 668.5 1411.5 675.02z"
        ></path>
      </g> */}
    </svg>
  );
};

export default Calendar;
