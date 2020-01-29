import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AUTH_ONBOARDING } from 'constants/routes';
import { sendWelcome } from 'actions/emails';

const Dashboard = ({ user, sendWelcome }) => {
  const firstLogin = user.attributes['custom:firstLogin'];
  if (firstLogin) {
    return <Redirect to={AUTH_ONBOARDING.route} />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => sendWelcome('tompope1994@gmail.com')}>
        Send welcome
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { sendWelcome })(Dashboard);
