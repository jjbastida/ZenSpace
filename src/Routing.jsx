import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

export function Routing() {
      return (
            <Router>
                  <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route component={NotFound} status={404}/>
                  </Switch>
            </Router>
      )
}
