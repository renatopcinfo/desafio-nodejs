import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/search" component={Search} isPrivate />

      <Route
        path="/"
        component={() => (
          <h1>
            404 <br /> página não encontrada
          </h1>
        )}
      />
    </Switch>
  );
}
