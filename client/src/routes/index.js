import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import AddTransaction from '../pages/AddTransaction';
import EditTransaction from '../pages/EditTransaction';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/transaction/add" component={AddTransaction} />
      <Route path="/transaction/edit" component={EditTransaction} />
    </Switch>
  );
}

export default Routes;
