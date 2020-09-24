import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Redirect to="/home" />
  </Switch>
);

export default Routes;
