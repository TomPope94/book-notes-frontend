import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { AUTH_RESET } from "constants/routes";

import { forgotPassword } from "actions/auth";

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
    color: "#fff",
    borderRadius: "0 0 100%"
  },
  contentContainer: {
    paddingLeft: 50,
    paddingRight: 50
  },
  contentText: {
    fontSize: "1.5rem",
    fontWeight: 200
  },
  highlightedText: {
    color: "#0e3f4a",
    fontWeight: 600
  },
  inputForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }
};

const AuthForgot = ({ forgotPassword }) => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    forgotPassword(username);

    history.push(AUTH_RESET.route);
  };

  return (
    <Fragment>
      <div style={styles.pageContainer}>
        <div style={styles.contentContainer}>
          <h1>Oh No!</h1>
          <p style={styles.contentText}>
            Don't worry! Here's how we're going to help:
          </p>
          <p style={styles.contentText}>
            Enter your <span style={styles.highlightedText}>email address</span>{" "}
            and we'll send you a{" "}
            <span style={styles.highlightedText}>unique code</span>... Simple!
          </p>
          <form style={styles.inputForm} onSubmit={e => handleSubmit(e)}>
            <h4 style={{ ...styles.contentText, marginRight: 20 }}>Email:</h4>
            <input
              style={{ marginRight: 20 }}
              type="text"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input type="submit" value="Send Link" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { forgotPassword })(AuthForgot);
