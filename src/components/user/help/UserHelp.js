import React from "react";

import { USER_HOME, USER_HELP } from "constants/routes";

import Breadcrumb from "components/nav/Breadcrumb";

const UserHelp = () => {
  return (
    <div>
      <Breadcrumb routes={{ USER_HOME, USER_HELP }} />
      <h1>User Help Page</h1>
    </div>
  );
};

export default UserHelp;
