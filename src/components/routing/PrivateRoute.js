import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AUTH, USER_VERIFY } from 'constants/routes';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to={AUTH.route} />
      ) : !user.attributes.email_verified && !user.loading ? (
        <Redirect to={USER_VERIFY.route} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
