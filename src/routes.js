import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import NotFound from './components/NotFound'

export const routes = (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='404' component={NotFound} />
    <Route path='*' component={NotFound} />
  </Switch>
)

export default routes;