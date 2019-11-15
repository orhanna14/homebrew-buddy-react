import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipes from "../components/Recipes";

export default (
  <Router>
    <Switch>
    <Route path = "/" exact component={ Recipes } />
  // This is for adding new paths, ex: /new add component you want to direct
  // here
  </Switch>
  </Router>
);
