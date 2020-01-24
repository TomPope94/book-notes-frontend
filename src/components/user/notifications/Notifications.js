import React from "react";

import { USER_HOME, USER_NOTIFICATIONS } from "constants/routes";

import Breadcrumb from "components/nav/Breadcrumb";

const Notifications = () => {
  return (
    <div>
      <Breadcrumb routes={{ USER_HOME, USER_NOTIFICATIONS }} />
      <h1>Notifications Page</h1>
    </div>
  );
};

export default Notifications;
