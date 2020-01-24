import React from "react";

// const styles = {
//   item: {

//   }
// }

const BreadcrumbItem = ({ children, ...props }) => (
  <li {...props}>{children}</li>
);

export default BreadcrumbItem;
