import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Buxoriy from "../../pages/Buxoriy/Buxoriy";
import Other from "../../pages/Other/Other";
import Termiziy from "../../pages/Termiziy/Termiziy";
import Navigation from "../Navigation/Navigation";

function Content() {
  return (
    <Router>
      <Switch>
        <div className="content row">
          <Navigation />
          <Route path="/hadis/buxoriy" component={Buxoriy} />
          <Route path="/hadis/termiziy" component={Termiziy} />
          <Route path="/hadis/other" component={Other} />
        </div>
      </Switch>
    </Router>
  );
}

export default Content;
