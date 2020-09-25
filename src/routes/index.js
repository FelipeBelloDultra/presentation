import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Why from '../pages/Why';

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/why" exact component={Why} />
    <Redirect to="/home" />
  </Switch>
);

export default Routes;
