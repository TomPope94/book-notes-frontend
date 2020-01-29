import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import { updateUser } from "actions/user";
import { USER_DASHBOARD } from "constants/routes";

const styles = {
  pageContainer: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    background: "#fff"
  }
};

const Welcome = ({ updateUser, user }) => {
  const [formData, setFormData] = useState({
    displayName: "",
    firstLogin: false
  });
  const { displayName } = formData;
  const history = useHistory();

  if (!user.attributes.firstLogin) {
    return <Redirect to={USER_DASHBOARD.route} />;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await updateUser({ ...user.attributes, ...formData });

    history.push(USER_DASHBOARD.route);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.pageContainer}>
      <h1>Welcome to Liberead</h1>
      <p>
        Thank you for signing up for a Liberead account, it's great to meet you!
        Before we can continue, what should we call you? Don't worry this can be
        changed later...
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="displayName"
          value={displayName}
          onChange={e => handleChange(e)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { updateUser })(Welcome);
