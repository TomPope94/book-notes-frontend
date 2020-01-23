import React from 'react';

const styles = {
  icon: {
    height: '100%',
    marginBottom: 20
  }
};

const UserIcon = () => {
  return (
    <svg
      style={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117 117"
    >
      <path d="M58.5 1A57.5 57.5 0 111 58.5 57.56 57.56 0 0158.5 1m0-1A58.5 58.5 0 10117 58.5 58.5 58.5 0 0058.5 0z"></path>
      <path d="M58.5 27A20.5 20.5 0 1138 47.5 20.53 20.53 0 0158.5 27m0-1A21.5 21.5 0 1080 47.5 21.51 21.51 0 0058.5 26z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        d="M47.5 65.5s-26 2-26 38M69.5 65.5s26 2 26 38"
      ></path>
    </svg>
  );
};

export default UserIcon;
