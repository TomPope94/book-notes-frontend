import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import anime from "animejs";
import { useSwipeable } from "react-swipeable";

import { BOOKS_HOME } from "constants/routes";

import Login from "components/auth/Login";
import Register from "components/auth/Register";

const styles = {
  formContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "absolute"
  },
  swipeHelper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
    transformOrigin: "center"
  },
  formPageInner: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transformOrigin: "center",
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
  }
};

const AuthMobile = ({ isAuthenticated }) => {
  const [loginState, setLoginState] = useState(true);
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const animateStateChange = async () => {
    const animateDirection = loginState ? "normal" : "reverse";

    anime({
      targets: ".formContainer",
      rotateY: [0, 180],
      direction: animateDirection,
      duration: 750,
      easing: "cubicBezier(0.675, 0.000, 0.330, 1.000)"
    });
    await delay(750);
    setLoginState(!loginState);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => animateStateChange(),
    onSwipedLeft: () => animateStateChange(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // if (isAuthenticated) {
  //   return <Redirect to={BOOKS_HOME} />;
  // }

  return (
    <div style={styles.formContainer}>
      <div style={styles.currentFormContainer}>
        <div
          style={styles.formPageInner}
          {...handlers}
          className="formContainer"
        >
          <div style={styles.formPageBoth}>
            <Login />
            <div style={styles.swipeHelper}>
              <p>Swipe horizontal...</p>
            </div>
          </div>
          <div style={{ ...styles.formPageBack, ...styles.formPageBoth }}>
            <Register />
            <div style={styles.swipeHelper}>
              <p>Swipe horizontal...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AuthMobile);
