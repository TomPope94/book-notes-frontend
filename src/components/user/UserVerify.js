import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { verifyEmail } from 'actions/auth';

import { USER_DASHBOARD } from 'constants/routes';

const UserVerify = ({ verifyEmail, attributes }) => {
  const [formData, setFormData] = useState({
    username: '',
    verifyCode: ''
  });
  const { username, verifyCode } = formData;

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    await verifyEmail(username, verifyCode);
    history.push(USER_DASHBOARD.route);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (attributes.email_verified) {
    return <Redirect to={USER_DASHBOARD.route} />;
  }

  return (
    <div>
      <h1>Please verify your email address</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          name="verifyCode"
          value={verifyCode}
          onChange={e => handleChange(e)}
        />
        <input type="submit" value="Verify" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  attributes: state.user.attributes
});

export default connect(mapStateToProps, { verifyEmail })(UserVerify);
