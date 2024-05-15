// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import OrderPage from "./OrderPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
