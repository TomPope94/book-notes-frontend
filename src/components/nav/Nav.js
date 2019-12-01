import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'actions/auth';

const styles = {
  navBar: {
    width: '100vw',
    height: 50,
    background: '#f38b66',
    boxShadow: '0 1px 10px #222641'
  }
};

const Nav = ({ isAuthenticated, logout }) => {
  return (
    <div style={styles.navBar}>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Nav);
