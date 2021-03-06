import React, { useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

import Alert from './Alert';
import DashboardPage from './DashboardPage';
import BookPage from './BookPage';
import OrderConf from './OrderConf';
import LoginPage from './LoginPage';
import GuestPage from './guestPage/GuestPage';
import UpdatePassword from './UpdatePassword';
import RegisterPage from './RegisterPage';
import NotFoundPage from './NotFoundPage';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alert />
          <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/bookPage" component={BookPage} />>
            <Route
              path="/order/:id"
              render={props => <OrderConf {...props} isAuthed={true} />}
            />
            >
            <Route path="/loginpage" component={LoginPage} />>
            <Route path="/registerPage" component={RegisterPage} />>
            <Route path="/guestPage" component={GuestPage} />>
            <Route path="/updatePassword" component={UpdatePassword} />>
            <Route component={NotFoundPage} />>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
