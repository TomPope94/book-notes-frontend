import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { registerUser, verifyEmail } from "actions/auth";

import { USER_DASHBOARD } from "constants/routes";

import FormInput from "components/elements/FormInput";
import FormButton from "components/elements/FormButton";

const styles = {
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%"
  }
};

const RegisterForm = ({ registerUser, verifyEmail, ...props }) => {
  const [registerState, setRegisterState] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    verifyCode: ""
  });
  const { email, password, confirmPassword, verifyCode } = formData;
  const history = useHistory();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();
    if (password === confirmPassword) {
      await registerUser(email, password);

      setRegisterState(false);
    }
  };

  const handleConfirmSubmit = async e => {
    e.preventDefault();

    await verifyEmail(email, verifyCode, password);
    history.push(USER_DASHBOARD.route);
  };

  return (
    <Fragment>
      {registerState ? (
        <form onSubmit={e => handleRegisterSubmit(e)} {...props}>
          <FormInput
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={e => handleChange(e)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={e => handleChange(e)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={e => handleChange(e)}
          />
          <div style={styles.buttonRow}>
            <FormButton type="submit">Register</FormButton>
          </div>
        </form>
      ) : (
        <Fragment>
          <form onSubmit={e => handleConfirmSubmit(e)} {...props}>
            <h1>Please verify your email address</h1>
            <input
              type="text"
              name="email"
              value={email}
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
          <button onClick={() => setRegisterState(true)}>Back</button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default connect(null, { registerUser, verifyEmail })(RegisterForm);
