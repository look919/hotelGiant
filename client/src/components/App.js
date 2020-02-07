import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/main.scss";

import DashboardPage from "./DashboardPage";
import BookPage from "./BookPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route path="/bookPage" component={BookPage} />>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
