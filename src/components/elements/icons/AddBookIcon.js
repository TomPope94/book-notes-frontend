import React, { useState } from "react";
import anime from "animejs";

const styles = {
  icon: {
    cursor: "pointer"
  }
};

const AddBookIcon = ({ ...props }) => {
  const [hover, setHover] = useState(false);

  const animation = direction => {
    const animateDirection = direction ? "normal" : "reverse";

    anime({
      targets: ".plusSign",
      duration: 100,
      easing: "linear",
      fill: ["#000", "#f38b66"],
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 117"
      {...props}
      onMouseOver={() => handleHover()}
      onMouseOut={() => handleHover()}
      className="plusSign"
      fill="#000"
    >
      <path d="M58.5 1A57.5 57.5 0 111 58.5 57.56 57.56 0 0158.5 1m0-1A58.5 58.5 0 10117 58.5 58.5 58.5 0 0058.5 0z"></path>
      <path d="M68.61 20v28.39H97v20.22H68.61V97H48.39V68.61H20V48.39h28.39V20h20.22m1-1H47.39v28.39H19v22.22h28.39V98h22.22V69.61H98V47.39H69.61V19z"></path>
    </svg>
  );
};

export default AddBookIcon;
