import React, { Fragment } from 'react';

const VerifyForm = ({ ...props }) => {
  const handleSubmit = async e => {
    e.preventDefault();

    await verifyEmail(username, verifyCode);
    history.push(USER_DASHBOARD.route);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)} {...props}>
        <h1>Please verify your email address</h1>
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
    </Fragment>
  );
};

export default VerifyForm;
