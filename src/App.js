import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from './components/Splash';
import BooksHome from './components/BooksHome';
import Auth from './components/Auth';

import { SPLASH, AUTH, BOOKSHOME } from './constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={SPLASH} component={Splash} />
        <Route exact path={AUTH} component={Auth} />
        <Route exact path={BOOKSHOME} component={BooksHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
