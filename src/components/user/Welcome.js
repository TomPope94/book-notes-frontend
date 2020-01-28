import React from "react";
import { connect } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import { updateAttributes } from "actions/user";
import { USER_DASHBOARD } from "constants/routes";

const styles = {
  pageContainer: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    background: "#fff"
  }
};

const Welcome = ({ updateAttributes, user }) => {
  const history = useHistory();

  if (!user.attributes["custom:firstLogin"]) {
    return <Redirect to={USER_DASHBOARD.route} />;
  }

  const handleClick = async () => {
    await updateAttributes({
      "custom:firstLogin": false
    });

    history.push(USER_DASHBOARD.route);
  };

  return (
    <div style={styles.pageContainer}>
      <h1>WELCOME!!!!!!</h1>
      <button onClick={() => handleClick()}>Enter</button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { updateAttributes })(Welcome);
