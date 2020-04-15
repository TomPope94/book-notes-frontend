import React, { useState } from 'react';

const SalesCard = ({ heading, ...props }) => {
  const [hover, setHover] = useState(false);

  const styles = {
    cardContainer: {
      background: '#fff',
      boxShadow: '0 2px 5px rgba(1,1,1,0.3)',
      borderRadius: 5,
      transition: '0.25s linear',
      transform: hover ? 'scale(1.1, 1.1)' : 'scale(1,1)',
      padding: 25,
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      flexGrow: 1,
      margin: 25,
      minHeight: 500,
    },
  };

  return (
    <div
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      style={styles.cardContainer}
      {...props}
    >
      <h1 style={{ color: 'black' }}>{heading}</h1>
      {props.children}
    </div>
  );
};

export default SalesCard;
