import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipes from "../components/Recipes";

export default (
  <Router>
    <Switch>
    <Route path = "/" exact component={ Recipes } />
  </Switch>
  </Router>
);
