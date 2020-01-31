import React, { useState, Fragment } from 'react';
import anime from 'animejs';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { logout } from 'actions/auth';

import {
  USER_DASHBOARD,
  BOOKS_HOME,
  TRACKING,
  PLANNING,
  RECALL,
  HELP,
  USER_HOME,
  PRODUCT_HOME
} from 'constants/routes';
import LogoOrange from 'components/elements/images/LogoOrange';
import HelpIcon from 'components/elements/icons/HelpIcon';
import UserIcon from 'components/elements/icons/UserIcon';
import StoreIcon from 'components/elements/icons/StoreIcon';

const styles = {
  navBar: {
    height: '100vh',
    width: 150,
    background: '#F6A88C',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 10
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '50%'
  },
  pageLinks: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    height: '75%'
  },
  pageLink: {
    height: '25%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative'
  },
  linkBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'rgba(243, 139, 102, 1)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    zIndex: -2
  },
  dropDownBox: {
    height: 400,
    width: '15vw',
    background: '#f38b66',
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: 50,
    transformOrigin: 'top',
    transform: 'scaleY(0)',
    zIndex: 3
  },
  hiddenClick: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  },
  linkStyling: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#fff',
    pointerEvents: 'none'
  },
  navRightContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    alignItems: 'center'
  },
  logoContainer: {
    width: '80%',
    height: '20%',
    cursor: 'pointer'
  },
  navDivider: {
    width: '85%',
    height: 2,
    background: 'linear-gradient(90deg, transparent, #fff, transparent)',
    marginBottom: 20
  },
  linkRibbon: {
    width: 165,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#75b3b3',
    boxShadow: 'rgb(1,1,1,0.5) -3px 3px 5px',
    zIndex: -1
  },
  linkRibbonOverhang: {
    width: 0,
    height: 0,
    borderTop: '15px solid #0e3f4a',
    borderRight: '15px solid transparent',
    position: 'absolute',
    right: -15,
    bottom: -15
  }
};

const UserNav = ({ isAuthenticated, logout }) => {
  const [userDropdown, setUserDropdown] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const locationSlash = location.pathname.slice(1).indexOf('/');
  const baseLocation =
    locationSlash > 0
      ? location.pathname.slice(0, locationSlash + 1)
      : location.pathname;

  const toggleDropdown = isOpen => {
    const animateDirection = isOpen ? 'reverse' : 'normal';

    anime({
      targets: '.userDropDown',
      duration: 500,
      direction: animateDirection,
      scaleY: [0, 1]
    });
  };

  const handleClick = async () => {
    await toggleDropdown(userDropdown);

    setUserDropdown(!userDropdown);
  };

  const animateHover = (id, mouseOver) => {
    const animateDirection = mouseOver ? 'normal' : 'reverse';

    anime({
      targets: `#${id} span`,
      duration: 200,
      easing: 'linear',
      direction: animateDirection,
      scaleX: [0, 1]
    });
  };

  return (
    <Fragment>
      {userDropdown ? (
        <div style={styles.hiddenClick} onClick={() => handleClick()} />
      ) : null}
      {isAuthenticated ? (
        <div style={styles.navBar}>
          <div style={styles.navLinks}>
            <LogoOrange
              style={styles.logoContainer}
              onClick={() => history.push(USER_DASHBOARD.route)}
            />
            <span style={styles.navDivider} />
            <div style={styles.pageLinks}>
              <div
                style={styles.pageLink}
                onClick={() => history.push(BOOKS_HOME.route)}
                id="libraryLink"
                onMouseOver={() => animateHover('libraryLink', true)}
                onMouseOut={() => animateHover('libraryLink', false)}
              >
                <span style={styles.linkBackground} />
                {baseLocation === BOOKS_HOME.route ? (
                  <Fragment>
                    <div style={styles.linkRibbon} />
                    <div style={styles.linkRibbonOverhang} />
                  </Fragment>
                ) : null}
                <p style={styles.linkStyling}>Library</p>
              </div>
              <div
                style={styles.pageLink}
                onClick={() => history.push(PLANNING.route)}
                id="planLink"
                onMouseOver={() => animateHover('planLink', true)}
                onMouseOut={() => animateHover('planLink', false)}
              >
                <span style={styles.linkBackground} />
                {baseLocation === PLANNING.route ? (
                  <Fragment>
                    <div style={styles.linkRibbon} />
                    <div style={styles.linkRibbonOverhang} />
                  </Fragment>
                ) : null}
                <p style={styles.linkStyling}>Plan</p>
              </div>
              <div
                style={styles.pageLink}
                onClick={() => history.push(TRACKING.route)}
                id="trackLink"
                onMouseOver={() => animateHover('trackLink', true)}
                onMouseOut={() => animateHover('trackLink', false)}
              >
                <span style={styles.linkBackground} />
                {baseLocation === TRACKING.route ? (
                  <Fragment>
                    <div style={styles.linkRibbon} />
                    <div style={styles.linkRibbonOverhang} />
                  </Fragment>
                ) : null}
                <p style={styles.linkStyling}>Track</p>
              </div>
              <div
                style={styles.pageLink}
                onClick={() => history.push(RECALL.route)}
                id="recallLink"
                onMouseOver={() => animateHover('recallLink', true)}
                onMouseOut={() => animateHover('recallLink', false)}
              >
                <span style={styles.linkBackground} />
                {baseLocation === RECALL.route ? (
                  <Fragment>
                    <div style={styles.linkRibbon} />
                    <div style={styles.linkRibbonOverhang} />
                  </Fragment>
                ) : null}
                <p style={styles.linkStyling}>Recall</p>
              </div>
            </div>
          </div>
          <div style={styles.navRightContainer}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%'
              }}
            >
              <StoreIcon
                style={{ width: '30%', cursor: 'pointer' }}
                onClick={() => history.push(PRODUCT_HOME.route)}
              />
              <HelpIcon
                onClick={() => history.push(HELP.route)}
                style={{ width: '30%', cursor: 'pointer' }}
                strokeWidth={2}
                fill={'#fff'}
                stroke={'#fff'}
                textfill={'#fff'}
                textstroke={'#fff'}
              />
            </div>
            <UserIcon onClick={() => history.push(USER_HOME.route)} />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(UserNav);
