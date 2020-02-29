import React from 'react';

const styles = {
  iconContainer: {
    background: '#fff',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }
};

const IconButton = ({ active, children, ...props }) => {
  return (
    <span
      style={{
        ...styles.iconContainer,
        opacity: active ? 1 : 0.5,
        boxShadow: active
          ? '0 1px 2px rgba(1,1,1, 1)'
          : '0 1px 1px rgba(1,1,1, 0.5)'
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default IconButton;
