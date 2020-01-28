import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { AUTH_ONBOARDING } from "constants/routes";

const Dashboard = ({ user }) => {
  const firstLogin = user.attributes["custom:firstLogin"];
  if (firstLogin) {
    return <Redirect to={AUTH_ONBOARDING.route} />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Dashboard);
