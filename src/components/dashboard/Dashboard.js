import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { AUTH_ONBOARDING } from "constants/routes";
import { sendWelcome } from "actions/emails";
// import { createUser } from "actions/user";

const Dashboard = ({ user, sendWelcome }) => {
  if (user.attributes.firstLogin) {
    return <Redirect to={AUTH_ONBOARDING.route} />;
  }

  return (
    <Fragment>
      {user.loading ? null : (
        <div>
          <h1>Dashboard</h1>
          <button onClick={() => sendWelcome("tompope1994@gmail.com")}>
            Send welcome
          </button>
          {/* <button onClick={() => createUser("tompope1994@gmail.com")}>
        Create User
      </button> */}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { sendWelcome })(Dashboard);
