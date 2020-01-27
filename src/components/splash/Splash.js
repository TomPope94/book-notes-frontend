import React from "react";

const styles = {
  pageContainer: {
    background: "#f38b66",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 0,
    paddingTop: 100,
    color: "#fff"
  }
};

const Splash = () => {
  return (
    <div style={styles.pageContainer}>
      <h1>Forget Forgetting</h1>
    </div>
  );
};

export default Splash;
