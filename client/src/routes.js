import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Customers from './containers/Customers';
import Customer from './containers/Customer';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Customers} />
     <Route path="/:id" component={Customer} />
  </Route>
)
