import React, { useEffect, useState } from "react";

const FormInput = props => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  });
  const { width } = dimensions;
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth
      });
    };

    window.addEventListener("resize", handleResize);
    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const styles = {
    inputStyle: {
      background: "none",
      border: "none",
      borderBottom: "3px solid #222641",
      fontSize: width >= 1000 ? "2rem" : "7vw",
      marginBottom: 50,
      fontFamily: "baskervile"
    }
  };
  return (
    <input {...props} style={{ ...styles.inputStyle, ...props.styling }} />
  );
};

export default FormInput;
