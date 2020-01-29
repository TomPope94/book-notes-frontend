import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "actions/auth";

import {
  ACCOUNT_HOME,
  ACCOUNT_BILLING,
  USER_NOTIFICATIONS,
  USER_HELP
} from "constants/routes";

const styles = {
  contentContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  toplineContainer: {
    display: "flex",
    flexGrow: 0.25,
    alignItems: "center"
  },
  buttonsContainer: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  button: {
    flex: "0 1 20%",
    minHeight: 300,
    minWidth: 300,
    padding: 25,
    cursor: "pointer",
    borderRadius: 15,
    boxShadow: "0 2px 5px #8a8fad"
  }
};

const UserHome = ({ logout, user }) => {
  const history = useHistory();

  return (
    <div style={styles.contentContainer}>
      <div style={styles.toplineContainer}>
        <h2>Hello {user.attributes.displayName}!</h2>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <div style={styles.buttonsContainer}>
        <div
          style={styles.button}
          onClick={() => history.push(USER_NOTIFICATIONS.route)}
        >
          <h1>Notifications</h1>
          <p>See your latest messages from Liberead AI</p>
        </div>
        <div
          style={styles.button}
          onClick={() => history.push(ACCOUNT_HOME.route)}
        >
          <h1>Account</h1>
          <p>Manage your account details (email, name etc.)</p>
        </div>
        <div
          style={styles.button}
          onClick={() => history.push(ACCOUNT_BILLING.route)}
        >
          <h1>Billing</h1>
          <p>See payment history and manage your payment methods</p>
        </div>
        <div
          style={styles.button}
          onClick={() => history.push(USER_HELP.route)}
        >
          <h1>Customer Help</h1>
          <p>
            Need to ask something from one of our team or maybe it's been asked
            before in our FAQs
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logout })(UserHome);
