import React, { useState, Fragment } from 'react';
import anime from 'animejs';
import { connect } from 'react-redux';

import { logout } from 'actions/auth';

import UserDropdown from 'components/nav/UserDropdown';

const styles = {
  navBar: {
    width: '100vw',
    height: 50,
    background: '#f38b66',
    boxShadow: '0 1px 10px #222641',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  dropDownBox: {
    height: 400,
    width: '15vw',
    background: '#f38b66',
    position: 'absolute',
    top: 0,
    marginTop: 50,
    transformOrigin: 'top',
    transform: 'scaleY(0)'
  }
};

const Nav = ({ isAuthenticated }) => {
  const [userDropdown, setUserDropdown] = useState(false);

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

  return (
    <div style={styles.navBar}>
      {isAuthenticated ? (
        <Fragment>
          <button onClick={() => handleClick()}>User</button>
          <div style={styles.dropDownBox} className="userDropDown">
            <UserDropdown />
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Nav);
