import React from "react";

const styles = {
  buttonStyle: {
    border: "none",
    background: "#fff",
    fontSize: "2rem",
    padding: 10,
    cursor: "pointer",
    color: "#222641"
  }
};

const FormButton = props => {
  return (
    <button style={styles.buttonStyle} {...props}>
      {props.children}
    </button>
  );
};

export default FormButton;
