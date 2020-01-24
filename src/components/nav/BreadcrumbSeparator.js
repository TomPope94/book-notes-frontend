import React from "react";

const styles = {
  separator: {
    margin: "auto 6px",
    userSelect: "none",
    color: "#333"
  }
};

const BreadcrumbSeparator = ({ children, ...props }) => {
  return (
    <li style={styles.separator} {...props}>
      {children}
    </li>
  );
};

export default BreadcrumbSeparator;
