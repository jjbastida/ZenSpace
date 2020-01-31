import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { routeObject } from "./routes";

export function Routing() {
  return (
    <Router>
      <Switch>
          {routeObject.map(({slug, exact, name, pageData, Component}) => (
            <Route
                key={name}
                path={slug}
                exact={exact}
                render={() => <Component pageData={pageData}/>}
            />
        ))}
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}
