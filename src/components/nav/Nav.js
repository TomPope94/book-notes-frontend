import React, { useState, Fragment } from "react";
import anime from "animejs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "actions/auth";
import {
  AUTH,
  BOOKS_HOME,
  TRACKING,
  PLANNING,
  RECALL,
  HELP
} from "constants/routes";

import UserDropdown from "components/nav/UserDropdown";

const styles = {
  navBar: {
    width: "100vw",
    height: 50,
    background: "#f38b66",
    boxShadow: "0 1px 10px #222641",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative"
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between"
  },
  dropDownBox: {
    height: 400,
    width: "15vw",
    background: "#f38b66",
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 50,
    transformOrigin: "top",
    transform: "scaleY(0)",
    zIndex: 3
  },
  hiddenClick: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2
  },
  linkStyling: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "#fff"
  }
};

const Nav = ({ isAuthenticated }) => {
  const [userDropdown, setUserDropdown] = useState(false);

  const toggleDropdown = isOpen => {
    const animateDirection = isOpen ? "reverse" : "normal";

    anime({
      targets: ".userDropDown",
      duration: 500,
      direction: animateDirection,
      scaleY: [0, 1]
    });
  };

  const handleClick = async () => {
    await toggleDropdown(userDropdown);

    setUserDropdown(!userDropdown);
  };

  return (
    <Fragment>
      {userDropdown ? (
        <div style={styles.hiddenClick} onClick={() => handleClick()} />
      ) : null}
      <div style={styles.navBar}>
        {isAuthenticated ? (
          <div style={styles.navLinks}>
            <h2>LibeRead</h2>
            <Link to={BOOKS_HOME} style={styles.linkStyling}>
              Library
            </Link>
            <Link to={PLANNING} style={styles.linkStyling}>
              Plan
            </Link>
            <Link to={TRACKING} style={styles.linkStyling}>
              Track
            </Link>
            <Link to={RECALL} style={styles.linkStyling}>
              Recall
            </Link>
          </div>
        ) : null}
        {isAuthenticated ? (
          <div>
            <Link to={HELP} style={styles.linkStyling}>
              Help
            </Link>
            <button onClick={() => handleClick()}>User</button>
            <div style={styles.dropDownBox} className="userDropDown">
              <UserDropdown />
            </div>
          </div>
        ) : (
          <Link to={AUTH}>Login</Link>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Nav);
