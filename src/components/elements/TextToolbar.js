import React from 'react';
import { cx, css } from 'emotion';

export const Menu = React.forwardRef(({ className, ...props }, ref) => {
  const styles = {
    menu: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: 15
    }
  };

  return <div {...props} ref={ref} style={styles.menu} />;
});

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => {
  const styles = {
    menuStyle: {
      position: 'relative',
      padding: '1px 18px 17px',
      margin: '0 -20px',
      borderBottom: '2px solid #eee',
      marginBottom: 20
    }
  };

  return <Menu {...props} ref={ref} style={styles.menuStyle} />;
});

export const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => {
    const styles = {
      span: {
        cursor: 'pointer',
        color: reversed
          ? active
            ? 'white'
            : '#aaa'
          : active
          ? 'black'
          : '#ccc'
      }
    };

    return <span {...props} ref={ref} style={styles.span} />;
  }
);

export const Icon = React.forwardRef(({ className, ...props }, ref) => {
  const styles = {
    span: {
      fontSize: 18,
      verticalAlign: 'text-bottom'
    }
  };

  return <span {...props} ref={ref} style={styles.span} />;
});
