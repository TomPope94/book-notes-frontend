import React from "react";

const styles = {
  dropdownContainer: {
    background: "rgba(243, 139, 102, 0.25)",
    width: "100%",
    height: "100%",
    paddingTop: 1
  }
};

const BookEditDropdown = () => {
  return (
    <div style={styles.dropdownContainer}>
      <p>Change State</p>
      <p>Delete</p>
      <p>Edit Cover</p>
      <p>Edit # Pages</p>
    </div>
  );
};

export default BookEditDropdown;
