import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from './../utils/setAuthToken';

import Alert from './Alert';
import DashboardPage from './DashboardPage';
import BookPage from './BookPage';
import LoginPage from './LoginPage';
import GuestPage from './GuestPage';
import UpdatePassword from './UpdatePassword';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alert />
          <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/bookPage" component={BookPage} />>
            <Route path="/loginpage" component={LoginPage} />>
            <Route path="/guestPage" component={GuestPage} />>
            <Route path="/updatePassword" component={UpdatePassword} />>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
