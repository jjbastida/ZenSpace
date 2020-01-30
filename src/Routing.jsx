import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';

export function Routing() {
      return (
            <Router>
                  <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/sign-up' exact component={SignUp} />
                        <Route component={NotFound} status={404}/>
                  </Switch>
            </Router>
      );
}
