import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import anime from "animejs";

import { BOOKS_HOME } from "constants/routes";

import Login from "components/auth/Login";
import Register from "components/auth/Register";

const AuthDesktop = ({ isAuthenticated }) => {
  const [loginState, setLoginState] = useState(true);

  const styles = {
    pageContainer: {
      height: "100vh",
      width: "100vw",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "row",
      background: "#fff"
    },
    currentFormContainer: {
      background: "transparent",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      willChange: "transform",
      transformOrigin: "right"
    },
    formPageInner: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transformOrigin: "right",
      transformStyle: "preserve-3d",
      willChange: "transform"
    },
    formPageBoth: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      background: "transparent"
    },
    formPageBack: {
      transform: "rotateY(180deg)"
    },
    stateContainerLeft: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "50vw",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      display: loginState ? "none" : "flex",
      zIndex: 10
    },
    stateContainerRight: {
      display: "flex",
      width: "50%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    changeStateText: {
      color: "#676a7b",
      fontSize: "3rem",
      cursor: "pointer"
    }
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const animateChangeState = toRegister => {
    if (toRegister) {
      anime
        .timeline({
          autoplay: true
        })
        .add({
          targets: ".formContainer",
          rotateY: [0, 180],
          easing: "cubicBezier(0.675, 0.000, 0.330, 1.000)",
          duration: 1500
        })
        .add(
          {
            targets: ".changeToRegister",
            opacity: [1, 0],
            duration: 1500
          },
          0
        )
        .add(
          {
            targets: ".changeToLogin",
            opacity: [0, 1],
            duration: 1500
          },
          0
        );
    } else {
      anime
        .timeline({
          autoplay: true
        })
        .add({
          targets: ".formContainer",
          rotateY: [180, 0],
          easing: "cubicBezier(0.675, 0.000, 0.330, 1.000)",
          duration: 1500
        })
        .add(
          {
            targets: ".changeToRegister",
            opacity: [0, 1],
            duration: 500
          },
          1000
        )
        .add(
          {
            targets: ".changeToLogin",
            opacity: [1, 0],
            duration: 1500
          },
          0
        );
    }
  };

  if (isAuthenticated) {
    return <Redirect to={BOOKS_HOME} />;
  }

  const changeState = async () => {
    animateChangeState(loginState);
    await delay(1500);
    setLoginState(!loginState);
  };

  return (
    <Fragment>
      <div
        style={{ ...styles.changeStateContainer, ...styles.stateContainerLeft }}
      >
        <p
          style={styles.changeStateText}
          onClick={() => changeState()}
          className="changeToLogin"
        >
          Already Registered?
        </p>
      </div>
      <div style={styles.pageContainer}>
        <div style={styles.currentFormContainer}>
          <div style={styles.formPageInner} className="formContainer">
            <div style={styles.formPageBoth}>
              <Login />
            </div>
            <div style={{ ...styles.formPageBoth, ...styles.formPageBack }}>
              <Register />
            </div>
          </div>
        </div>
        <div style={styles.stateContainerRight}>
          <p
            style={styles.changeStateText}
            onClick={() => changeState()}
            className="changeToRegister"
          >
            Register an Account?
          </p>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AuthDesktop);
