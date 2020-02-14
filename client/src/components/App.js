import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Alert from './Alert';
import DashboardPage from './DashboardPage';
import BookPage from './BookPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alert />
          <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/bookPage" component={BookPage} />>
            <Route path="/loginpage" component={LoginPage} />>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
