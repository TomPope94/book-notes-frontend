import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from './components/Splash';
import BooksHome from './components/BooksHome';
import Auth from './components/Auth';

import { SPLASH, AUTH, BOOKSHOME } from './constants/routes';

import { Provider } from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth';

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={SPLASH} component={Splash} />
          <Route exact path={AUTH} component={Auth} />
          <Route exact path={BOOKSHOME} component={BooksHome} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
