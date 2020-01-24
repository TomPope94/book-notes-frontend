import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AUTH } from "constants/routes";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  loading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to={AUTH.route} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth,
  loading: state.books.books.loading
});

export default connect(mapStateToProps)(PrivateRoute);
