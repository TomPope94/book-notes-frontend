import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Nav from "components/nav/Nav";
import PrivateRoute from "components/routing/PrivateRoute";
import Splash from "components/splash/Splash";
import SalesPage from "components/splash/SalesPage";
import AuthBroker from "components/auth/AuthBroker";
import AuthForgot from "components/auth/AuthForgot";
import SignedUp from "components/auth/SignedUp";
import UserOnboarding from "components/auth/UserOnboarding";
import BooksHome from "components/books/BooksHome";
import BooksHelp from "components/books/BooksHelp";
import BooksDetails from "components/books/details/BookDetails";
import AddBook from "components/books/AddBook";
import Account from "components/user/account/Account";
import Billing from "components/user/account/billing/Billing";
import Profile from "components/user/profile/Profile";
import Activity from "components/user/activity/Activity";
import Search from "components/planning/search/Search";
import Tracking from "components/tracking/Tracking";
import PlanHome from "components/planning/PlanHome";
import PageNotFound from "components/other/PageNotFound";
import Help from "components/other/Help";
import Recall from "components/recall/Recall";

import {
  SPLASH,
  SALES,
  AUTH,
  AUTH_FORGOT,
  AUTH_SIGNED_UP,
  AUTH_ONBOARDING,
  BOOKS_HOME,
  BOOKS_HELP,
  BOOKS_DETAILS,
  BOOKS_ADD,
  ACCOUNT_HOME,
  ACCOUNT_BILLING,
  PROFILE_HOME,
  USER_ACTIVITY,
  SEARCH,
  PLANNING,
  TRACKING,
  RECALL,
  HELP
} from "constants/routes";

import { Provider } from "react-redux";
import store from "store";
import { loadUser } from "./actions/auth";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Nav />
        <div style={{ paddingLeft: 200, paddingTop: 25, paddingRight: 25 }}>
          <Switch>
            <Route exact path={AUTH} component={AuthBroker} />
            <Route exact path={SPLASH} component={Splash} />
            <Route exact path={SALES} component={SalesPage} />
            <Route exact path={HELP} component={Help} />
            <Route exact path={AUTH_FORGOT} component={AuthForgot} />
            <PrivateRoute exact path={AUTH_SIGNED_UP} component={SignedUp} />
            <PrivateRoute
              exact
              path={AUTH_ONBOARDING}
              component={UserOnboarding}
            />
            <PrivateRoute exact path={BOOKS_HOME} component={BooksHome} />
            <PrivateRoute exact path={BOOKS_HELP} component={BooksHelp} />
            <PrivateRoute exact path={BOOKS_DETAILS} component={BooksDetails} />
            <PrivateRoute exact path={BOOKS_ADD} component={AddBook} />
            <PrivateRoute exact path={ACCOUNT_HOME} component={Account} />
            <PrivateRoute exact path={ACCOUNT_BILLING} component={Billing} />
            <PrivateRoute exact path={PROFILE_HOME} component={Profile} />
            <PrivateRoute exact path={USER_ACTIVITY} component={Activity} />
            <PrivateRoute exact path={SEARCH} component={Search} />
            <PrivateRoute exact path={PLANNING} component={PlanHome} />
            <PrivateRoute exact path={TRACKING} component={Tracking} />
            <PrivateRoute exact path={RECALL} component={Recall} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
