import React, { Fragment, useEffect, useState } from "react";

import AuthDesktop from "components/auth/AuthDesktop";
import AuthMobile from "components/auth/AuthMobile";

const AuthBroker = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  });
  const { width } = dimensions;
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth
      });
    };

    if (window.innerWidth < 1000) {
      console.log("CHANGE!");
    }
    window.addEventListener("resize", handleResize);
    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <Fragment>{width >= 1000 ? <AuthDesktop /> : <AuthMobile />}</Fragment>
  );
};

export default AuthBroker;
