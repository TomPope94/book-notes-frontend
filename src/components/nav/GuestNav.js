import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {
  AUTH,
  SPLASH,
  GUEST_PRODUCT,
  GUEST_PRICING,
  GUEST_BLOG,
  GUEST_SUPPORT
} from "constants/routes";

import LogoWhite from "components/elements/images/LogoWhite";
import LogoOrange from "components/elements/images/LogoOrange";

const styles = {
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: 50,
    paddingRight: 50,
    zIndex: 2,
    position: "relative",
    left: 0,
    top: 0
  },
  navLeft: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%"
  },
  navRight: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%"
  },
  logoContainer: {
    height: "80%",
    cursor: "pointer"
  },
  linkStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    fontSize: "0.85rem",
    cursor: "pointer",
    color: "#fff"
  }
};

const GuestNav = ({ isAuthenticated }) => {
  const history = useHistory();

  return (
    <Fragment>
      {!isAuthenticated ? (
        <div style={styles.navContainer}>
          <div style={styles.navLeft}>
            <LogoOrange
              style={styles.logoContainer}
              onClick={() => history.push(SPLASH.route)}
            />
            <p
              onClick={() => history.push(GUEST_PRODUCT.route)}
              style={styles.linkStyle}
            >
              Product
            </p>
            <p
              onClick={() => history.push(GUEST_PRICING.route)}
              style={styles.linkStyle}
            >
              Pricing
            </p>
            <p
              onClick={() => history.push(GUEST_BLOG.route)}
              style={styles.linkStyle}
            >
              Blog
            </p>
            <p
              onClick={() => history.push(GUEST_SUPPORT.route)}
              style={styles.linkStyle}
            >
              Support
            </p>
          </div>
          <div style={styles.navRight}>
            <p style={styles.linkStyle}>Twitter</p>
            <p style={styles.linkStyle}>Facebook</p>
            <p style={styles.linkStyle}>Instagram</p>
            <Link to={AUTH.route} style={styles.linkStyle}>
              Login
            </Link>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(GuestNav);
