import React from 'react';

import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';

const buildRoutes = routes => routes.map(route => (
  <Route
    path={route.path}
    component={route.view}
    exact={route.exact}
    key={`route-${route.path}-${uuid()}`}
  />
));

export default buildRoutes;
