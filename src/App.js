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
import Account from 'components/account/Account';
import Billing from 'components/account/billing/Billing';
import PageNotFound from 'components/other/PageNotFound';

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
  ACCOUNT_BILLING
} from 'constants/routes';

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
        <Switch>
          <Route exact path={AUTH} component={AuthBroker} />
          <Route exact path={SPLASH} component={Splash} />
          <Route exact path={SALES} component={SalesPage} />
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
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
