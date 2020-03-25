import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { routeObject } from "./routes";
import styled from "styled-components";
import { PageHelm } from "./components/declarativeComponents";

const MAIN = styled.main`
		background: ${({ theme }) => theme ? theme.background : '#FAFAFA'};
    min-height:100vh;
    padding-top: 4rem;
    box-sizing: border-box;
`;

export function Routing() {
  return (
    <MAIN>
      <Router>
        <Switch>
          {routeObject.map(({ slug, exact, name, pageData, Component }) => (
            <Route
              key={name}
              path={slug}
              exact={exact}
              render={() => (<>
                <PageHelm pageData={pageData} />
                <Component pageData={pageData} />
              </>)
              }
            />
          ))}
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </MAIN>
  );
}
