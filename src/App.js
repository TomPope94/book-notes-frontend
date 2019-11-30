import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import PrivateRoute from 'components/routing/PrivateRoute';
import Splash from 'components/splash/Splash';
import BooksHome from 'components/books/BooksHome';
import Auth from 'components/auth/Auth';

import { SPLASH, AUTH, BOOKSHOME } from 'constants/routes';

import { Provider } from 'react-redux';
import store from 'store';
import Nav from 'components/nav/Nav';
// import { loadUser } from './actions/auth';

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route exact path={SPLASH} component={Splash} />
          <Route exact path={AUTH} component={Auth} />
          <PrivateRoute exact path={BOOKSHOME} component={BooksHome} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
