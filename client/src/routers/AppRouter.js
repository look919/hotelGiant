import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/bookPage" component={DashboardPage} />>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
