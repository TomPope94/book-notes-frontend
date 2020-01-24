import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { AUTH, SPLASH } from "constants/routes";

import LogoWhite from "components/elements/images/LogoWhite";

const styles = {
  navContainer: {
    display: "flex",
    alignItems: "center",
    height: 65
  },
  logoContainer: {
    height: "80%",
    cursor: "pointer"
  }
};

const GuestNav = ({ isAuthenticated }) => {
  const history = useHistory();

  return (
    <Fragment>
      {!isAuthenticated ? (
        <div style={styles.navContainer}>
          <LogoWhite
            style={styles.logoContainer}
            onClick={() => history.push(SPLASH.route)}
          />
          <Link to={AUTH.route}>Login</Link>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(GuestNav);
