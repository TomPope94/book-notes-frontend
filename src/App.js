import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Nav from 'components/nav/Nav';
import PrivateRoute from 'components/routing/PrivateRoute';
import Splash from 'components/splash/Splash';
import SalesPage from 'components/splash/SalesPage';
import AuthBroker from 'components/auth/AuthBroker';
import AuthForgot from 'components/auth/AuthForgot';
import SignedUp from 'components/auth/SignedUp';
import UserOnboarding from 'components/auth/UserOnboarding';
import BooksHome from 'components/books/BooksHome';
import BooksHelp from 'components/books/BooksHelp';
import BooksDetails from 'components/books/details/BookDetails';
import AddBook from 'components/books/AddBook';
import Account from 'components/user/account/Account';
import Billing from 'components/user/account/billing/Billing';
import Profile from 'components/user/profile/Profile';
import Activity from 'components/user/activity/Activity';
import Search from 'components/planning/search/Search';
import Tracking from 'components/tracking/Tracking';
import PlanHome from 'components/planning/PlanHome';
import PageNotFound from 'components/other/PageNotFound';
import Help from 'components/other/Help';
import Recall from 'components/recall/Recall';

import routes from 'constants/routes';

import { Provider } from 'react-redux';
import store from 'store';
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Nav />
        <div
          style={{
            paddingLeft: 200,
            paddingTop: 25,
            paddingRight: 25,
            height: '95vh'
          }}
        >
          <Switch>
            <Route exact path={routes.AUTH.route} component={AuthBroker} />
            <Route exact path={routes.SPLASH.route} component={Splash} />
            <Route exact path={routes.SALES.route} component={SalesPage} />
            <Route exact path={routes.HELP.route} component={Help} />
            <Route
              exact
              path={routes.AUTH_FORGOT.route}
              component={AuthForgot}
            />
            <PrivateRoute
              exact
              path={routes.AUTH_SIGNED_UP.route}
              component={SignedUp}
            />
            <PrivateRoute
              exact
              path={routes.AUTH_ONBOARDING.route}
              component={UserOnboarding}
            />
            <PrivateRoute
              exact
              path={routes.BOOKS_HOME.route}
              component={BooksHome}
            />
            <PrivateRoute
              exact
              path={routes.BOOKS_HELP.route}
              component={BooksHelp}
            />
            <PrivateRoute
              exact
              path={routes.BOOKS_DETAILS.route}
              component={BooksDetails}
            />
            <PrivateRoute
              exact
              path={routes.BOOKS_ADD.route}
              component={AddBook}
            />
            <PrivateRoute
              exact
              path={routes.ACCOUNT_HOME.route}
              component={Account}
            />
            <PrivateRoute
              exact
              path={routes.ACCOUNT_BILLING.route}
              component={Billing}
            />
            <PrivateRoute
              exact
              path={routes.PROFILE_HOME.route}
              component={Profile}
            />
            <PrivateRoute
              exact
              path={routes.USER_ACTIVITY.route}
              component={Activity}
            />
            <PrivateRoute exact path={routes.SEARCH.route} component={Search} />
            <PrivateRoute
              exact
              path={routes.PLANNING.route}
              component={PlanHome}
            />
            <PrivateRoute
              exact
              path={routes.TRACKING.route}
              component={Tracking}
            />
            <PrivateRoute exact path={routes.RECALL.route} component={Recall} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
